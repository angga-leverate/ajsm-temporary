const kebabCase = (string) => string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
const rupiahFormat = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
export {
  kebabCase,
  rupiahFormat
}
