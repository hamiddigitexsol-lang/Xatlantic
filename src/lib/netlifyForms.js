// Submits to Netlify Forms — requires a matching hidden static <form> in
// index.html (data-netlify="true") so Netlify's build bot registers the
// form name and field list. React forms can't be detected at build time
// since they don't exist in the static HTML, hence the hidden duplicate.
//
// If any field value is a File, the submission is sent as multipart
// form-data so Netlify actually stores the file (and includes a download
// link in the submission/notification) instead of just its filename.
export async function submitNetlifyForm(formName, fields) {
  const hasFile = Object.values(fields).some((v) => v instanceof File)

  let body
  const headers = {}
  if (hasFile) {
    body = new FormData()
    body.append('form-name', formName)
    for (const [key, value] of Object.entries(fields)) {
      if (value != null) body.append(key, value)
    }
    // No Content-Type header here — the browser sets the correct
    // multipart/form-data boundary automatically for FormData bodies.
  } else {
    body = new URLSearchParams({ 'form-name': formName, ...fields }).toString()
    headers['Content-Type'] = 'application/x-www-form-urlencoded'
  }

  const response = await fetch('/', { method: 'POST', headers, body })

  if (!response.ok) {
    throw new Error(`Netlify Forms submission failed with status ${response.status}`)
  }
}
