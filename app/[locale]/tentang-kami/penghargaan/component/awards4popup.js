import Image from "next/image";
import awards4 from "../../../../../public/img/awards/04-2019_Infobank_Unitlink_Award_2019.jpeg";
import Link from "next/link";

export default function awards4page()  {
  return (
    <>
            <div className="col-12 spr_liputanwrap">
              <div className="card border-0 mt-0">
                <div className="row g-4 mb-2">
                  <div className="col-md-12">
                    <div className="card-body px-0 pt-1 spr_liputantitle">
                      <Link
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#awards4"
                      >
                        <Image
                          src={awards4}
                          alt="AJSM"
                          className="img-fluid pb-3"
                        />
                      </Link>
                      <h5 className="text-center">
                        Infobank Digital Brand Awards
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id="awards4"
              tabIndex="-1"
              aria-labelledby="awards4Label"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <Image src={awards4} alt="AJSM" className="img-fluid pb-3" />
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="awards4Label">
                      Infobank Digital Brand Awards
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                </div>
              </div>
            </div>    
    </>
  )
}
