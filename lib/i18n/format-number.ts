export function formatNumber(num: number, locale: "ar" | "en"): string {
  if (locale === "ar") {
    // Convert to Arabic numerals
    const arabicNumerals = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"]
    return String(num)
      .split("")
      .map((digit) => (digit >= "0" && digit <= "9" ? arabicNumerals[Number.parseInt(digit)] : digit))
      .join("")
  }
  return String(num)
}

export function formatPrice(price: number, locale: "ar" | "en"): string {
  const formattedNum = formatNumber(price, locale)
  return locale === "ar" ? `${formattedNum} ج.م` : `${formattedNum} EGP`
}
