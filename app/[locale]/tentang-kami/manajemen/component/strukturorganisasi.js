import tokoiPic from "../../../../../public/img/strukturorganisasi_v2.png";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function hideakinomura() {
  const t = useTranslations();
  return (
    <>
      <Link href="#" data-bs-toggle="modal" data-bs-target="#struktur">
        <div className="col-12">
          <Image src={tokoiPic} className="img-fluid mx-auto border-0" alt="AJSM"/> 
        </div>
      </Link>
      <div
        className="modal fade"
        id="struktur"
        tabIndex="-1"
        aria-labelledby="tokoiLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="tokoiLabel">
              {t('Management.struktur')}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-12">
                  <Image
                    src={tokoiPic}
                    className="img-fluid"
                    alt="AJSM"
                  />
                </div>
                
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>    
    </>
  )
}
