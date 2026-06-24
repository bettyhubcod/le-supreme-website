
export const lieux =["Tous","Maristes","Mermoz","VDN","Virage"];
export const lieuxSansAll = ["Maristes", "Mermoz", "VDN", "Virage"]
import lieu12 from "../assets/lieu/lieu12.jpeg";


export const photos = lieuxSansAll.flatMap((lieu, lieuIndex) =>
  Array.from({ length: 3 }, (_, i) => ({
    id: lieuIndex * 3 + i + 1,
    lieu,
    src: lieu12,
    alt: `Le Suprême ${lieu}`
  }))
)   