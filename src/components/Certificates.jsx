import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { certificates } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { Award } from "lucide-react";

const CertificateCard = ({ certificate }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={certificate.date}
      iconStyle={{
        background: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      icon={
        certificate.icon ? (
          <div className="flex justify-center items-center w-full h-full">
            <img
              src={certificate.icon}
              alt={`${certificate.issuer} icon`}
              className="w-[70%] h-[70%] object-contain rounded-full"
            />
          </div>
        ) : (
          <div className="flex justify-center items-center w-full h-full bg-indigo-600 rounded-full">
            <Award className="w-[60%] h-[60%] text-white" />
          </div>
        )
      }
    >
      <div className="flex flex-col items-start">
        <h3 className="text-white text-[24px] font-bold">{certificate.title}</h3>
        <p className="text-gray-300 text-[16px] font-semibold" style={{ margin: 0 }}>
          {certificate.issuer}
        </p>
        {certificate.image && (
          <img
            src={certificate.image}
            alt={certificate.title}
            className="mt-3 w-full max-w-xs rounded shadow-lg"
          />
        )}
      </div>
      {certificate.description && Array.isArray(certificate.description) ? (
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {certificate.description.map((point, index) => (
            <li
              key={`certificate-point-${index}`}
              className="text-gray-300 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      ) : (
        certificate.description && (
          <p className="mt-3 text-gray-300 text-[14px]">
            {certificate.description}
          </p>
        )
      )}
      {certificate.link && (
        <div className="mt-3">
          <a
            href={certificate.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 font-medium hover:text-indigo-300 transition-colors text-sm"
          >
            View Certificate →
          </a>
        </div>
      )}
    </VerticalTimelineElement>
  );
};
const Certificates = () => {
  return (
    <>
      {/* Header with animation */}
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className={`${styles.sectionSubText} text-center`}>
          My certifications and achievements
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Certificates & Achievements
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#4f46e5">
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={`certificate-${index}`}
              certificate={certificate}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};
export default SectionWrapper(Certificates, "certificates");