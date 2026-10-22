/*import WindowWrapper from "#hoc/WindowWrapper.jsx"
import { WindowControls } from "#components/index.js"
import { Download } from "lucide-react"
import { Document, Page, pdfjs } from 'react-pdf';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const Resume = () => {
  return (
    <>
    <div id="window-header">
      <WindowControls target="resume" />
      <h2>Resume.pdf</h2>

      <a href="files/Resumeaastha.pdf" download className="cursor-pointer" title="Download resume">
      <Download className="icon" />
      </a>
    </div>

     <Document file="files/Resumeaastha.pdf" >
        <Page
         pageNumber={1} 
         rederTextLayer
         renderAnnotationLayer/>
      </Document>

    </>
  )
}

const ResumeWindow = WindowWrapper(Resume, 'resume')

export default ResumeWindow */


import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControls } from "#components/index.js";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>

        <a
          href="/files/Resumeaastha.pdf"
          download
          className="cursor-pointer"
          title="Download resume"
        >
          <Download className="icon" />
        </a>
      </div>

      <div className="resume-container">
        <Document
          file="/files/Resumeaastha.pdf"
          loading={<p>Loading resume...</p>}
          onLoadError={(error) =>
            console.error("PDF loading error:", error)
          }
          onSourceError={(error) =>
            console.error("PDF source error:", error)
          }
        >
          <Page
            pageNumber={1}
            renderTextLayer={true}
            renderAnnotationLayer={true}
            width={600}
          />
        </Document>
      </div>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
