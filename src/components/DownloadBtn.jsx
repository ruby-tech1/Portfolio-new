import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { saveAs } from "file-saver";

const DownloadBtn = () => {
  const downloadResume = async () => {
    // const url = "/assets/resume.pdf";
    // const link = document.createElement("a");
    // link.href = url;
    // link.download = "Alabi Reuben Resume.pdf";
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
    saveAs("/resume.pdf", "resume.pdf");
  };
  return (
    <button
      type="button"
      className="btn about-download-btn"
      onClick={() => downloadResume()}
      data-aos="fade-down"
    >
      download CV
      <FontAwesomeIcon
        icon="fa-solid fa-arrow-down"
        className="about-download-icon"
      />
    </button>
  );
};
export default DownloadBtn;
