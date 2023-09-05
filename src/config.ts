const config = {
    baseAPIURL : "http://localhost:5290"
}

const currencyFormatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "SEK",
    maximumFractionDigits:0
})

export default config;
export {currencyFormatter}