function menuCard({ nom, prix }) {
  return (
    <div className="menu-card">
      <span>{nom}</span>
      <span>{prix ? `${prix.toLocaleString()} F` : "Prix à venir"}</span>
    </div>
  )
}
export default menuCard;
