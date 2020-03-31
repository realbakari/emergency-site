require('dotenv').config()
const {
    META_TITLE,
    META_URL,
    META_DESC,
    META_LANG,
    META_COLOR,
    META_EMAIL,
    META_TELEPHONE
} = process.env

module.exports = {
    title: META_TITLE || 'Queensland COVID-19',
    url: META_URL || 'https://queensland-covid-19.netlify.com/',
    description: META_DESC || 'See daily reports on COVID-19 case numbers and the current situation in Queensland, Australia and Other States.',
    lang: META_LANG || 'en',
    primaryColor: META_COLOR || '#DB0000',
    email: META_EMAIL || undefined,
    telephone: META_TELEPHONE || '1800 020 080',
    dateFormat: 'dd LLLL yyyy'
}
