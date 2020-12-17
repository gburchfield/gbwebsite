import React from "react";
import styles from "./HeaderButtons.module.css";

export default function HeaderButtons() {
    return (
        <section className={styles.container}>
            <div>
                <a href={"#"} onClick={DownloadResume}>Download Resume</a>
                <a>View Portfolio</a>
            </div>
        </section>
    )
}

function DownloadResume(){
    const request = new XMLHttpRequest()
    request.open('POST','/download')
    request.setRequestHeader('Content-Type','application/json')
    request.responseType = 'blob'
    request.onload = function () {
        if (this.status === 200) {
            var filename = "";
            var disposition = request.getResponseHeader('Content-Disposition');
            if (disposition && disposition.indexOf('attachment') !== -1) {
                var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                var matches = filenameRegex.exec(disposition);
                if (matches != null && matches[1]) filename = matches[1].replace(/['"]/g, '');
            }
            var type = request.getResponseHeader('Content-Type');

            var blob = new Blob([this.response], { type: type });
            if (typeof window.navigator.msSaveBlob !== 'undefined') {
                // IE workaround for "HTML7007: One or more blob URLs were revoked by closing the blob for which they were created. These URLs will no longer resolve as the data backing the URL has been freed."
                window.navigator.msSaveBlob(blob, filename);
            } else {
                var URL = window.URL || window.webkitURL;
                var downloadUrl = URL.createObjectURL(blob);

                if (filename) {
                    // use HTML5 a[download] attribute to specify filename
                    var a = document.createElement("a");
                    // safari doesn't support this yet
                    if (typeof a.download === 'undefined') {
                        window.location = downloadUrl;
                    } else {
                        a.href = downloadUrl;
                        a.download = filename;
                        document.body.appendChild(a);
                        a.click();
                    }
                } else {
                    window.location = downloadUrl;
                }

                setTimeout(function () { URL.revokeObjectURL(downloadUrl); }, 100); // cleanup
            }
        }
    };
    var request_skills = [4,2,1]
    request.send(JSON.stringify({skills:request_skills}))
}
