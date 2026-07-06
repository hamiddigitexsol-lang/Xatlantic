// Submits to Netlify Forms — requires a matching hidden static <form> in
// index.html (data-netlify="true") so Netlify's build bot registers the
// form name and field list. React forms can't be detected at build time
// since they don't exist in the static HTML, hence the hidden duplicate.
export async function submitNetlifyForm(formName, fields) {
  const body = new URLSearchParams({ 'form-name': formName, ...fields }).toString()

  const response = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  })

  if (!response.ok) {
    throw new Error(`Netlify Forms submission failed with status ${response.status}`)
  }
}
