import tokoiPic from "../../../../../public/img/Shiratani.png";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
export default function hideakinomura() {
  const t = useTranslations();
  return (
    <>
      <Link href="#" data-bs-toggle="modal" data-bs-target="#shiratani">
        <div className="col-12">
          <div className="card border-0">
            <Image src={tokoiPic} className="img-fluid mx-auto border-0" alt="AJSM" width={200}/>
            <div className="card-body p-0 pt-3">
              <h5 className="card-title text-center">Satoshi Shiratani</h5>
              <p className="card-text text-center">{t('Management.vice-president-director')}</p>
            </div>
          </div>
        </div>
      </Link>
      <div
        className="modal fade"
        id="shiratani"
        tabIndex="-1"
        aria-labelledby="tokoiLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="tokoiLabel">
              Satoshi Shiratani
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
                <div className="col-12 col-md-3">
                  <Image
                    src={tokoiPic}
                    className="img-fluid"
                    alt="AJSM"
                  />
                </div>
                <div className="col-12 col-md-9 mt-4 ajsm_peoplebody">
                  <h3>
                    Satoshi Shiratani
                  </h3>
                  <p>{t('Management.vice-president-director')}</p>
                  <div dangerouslySetInnerHTML={{__html: t.raw(`Management.shiratani-profile`)}} />
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
