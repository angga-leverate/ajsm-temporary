import ardhayadiPic from "../../../../../public/img/ardhayadi.png";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
export default function ardhayadimitroatmodjo() {
  const t = useTranslations();
  return (
    <>
      <Link href="#" data-bs-toggle="modal" data-bs-target="#Ardhayadi">
        <div className="col-12">
          <div className="card border-0">
            <Image src={ardhayadiPic} className="img-fluid mx-auto border-0" alt="AJSM" width={200}/>
            <div className="card-body p-0 pt-3">
              <h5 className="card-title text-center mb-1">Ardhayadi Mitroatmodjo</h5>
              <p className="card-text text-center">{t('Management.independent-commissioner')}</p>
            </div>
          </div>
        </div>
      </Link>
      <div
        className="modal fade"
        id="Ardhayadi"
        tabIndex="-1"
        aria-labelledby="ArdhayadiLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="ArdhayadiLabel">
              Ardhayadi Mitroatmodjo
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
                    src={ardhayadiPic}
                    className="img-fluid"
                    alt="AJSM"
                  />
                </div>
                <div className="col-12 col-md-9 mt-4 ajsm_peoplebody">
                  <h3>
                    Ardhayadi Mitroatmodjo
                  </h3>
                  <p>{t('Management.independent-commissioner')}</p>
                  <div dangerouslySetInnerHTML={{__html: t.raw(`Management.ardhayadi-profile`)}} />
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
