// SWIPER
import "swiper/css/pagination";
import "swiper/css";

// REPOSITORY
import { sponsors } from "../Repository";

// COMPONENTS
import SponsorItem from "./SponsorItem";

// APOIADORES SECTION
export default function ApoiadoresSection() {
  return (
    <div id="apoiadores-section" className="section_half">
      <div id="apoiadores"></div>
      <h1 className="section_title">apoiadores</h1>
      <div className="section_content_half">
        {sponsors.map((sponsor) => {
          return (
            <SponsorItem
              key={sponsor.name}
              name={sponsor.name}
              imageFileName={sponsor.imageFileName}
              url={sponsor.url}
            />
          );
        })}
      </div>
    </div>
  );
}
