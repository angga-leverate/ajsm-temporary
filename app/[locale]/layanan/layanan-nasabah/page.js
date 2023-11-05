

export default function Page() {
  return (
    <div className='ajsm_page tentang_kami'>
      <section className="header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <header className="pt-4">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Layanan</a>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">Layanan Nasabah</li>
                  </ol>
                </nav>
                <h1 className="page-header-ui-title mb-3">Layanan Nasabah</h1>
              </header>
            </div>
          </div>
        </div>
      </section>
      <section className="body py-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12">
              <div className="card border-0 mt-0">
                <div className="row g-4 mb-2">
                  <div className="col-md-12">
                    <div className="card-body px-0 pt-1 spr_liputantitle">
                      <div className="col-md-12" id="formHubungi">
                      <h6><font color="red">*</font><font>Harus diisi</font></h6><br />
                      <div className="col-md-12 ">
                        <div className="form-group">
                          <label className="col-md-3 control-label">Nama Depan<font color="red">*</font></label>
                          <div className="col-md-9">
                            <input id="namadp" name="namadp" className="form-control" type="text" placeholder="" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="col-md-3 control-label">Nama Belakang<font color="red">*</font> </label>
                        <div className="col-md-9">
                          <input id="namabl" name="namabl" className="form-control" type="text" placeholder="" />
                        </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="col-md-3 control-label">Metode Komunikasi Yang Diinginkan<font color="red">*</font> </label>
                          <div className="col-md-9">
                            <input id="telp" name="telp" className="form-control" type="text" placeholder="Nomor Telpon" />
                          </div>
                          <div className="col-md-9">
                          <input id="email" name="email" className="form-control" type="email" placeholder="Email" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="col-md-3 control-label">Wilayah Domisili</label>
                          <div className="col-md-3">
                            <div className="live-search">
                              <div className="dropdown bootstrap-select">
                                <select id="domisili" className="selectpicker" data-live-search="true" tabIndex="-98">
                                  <option value="1">Aceh</option>
                                  <option value="14">Bali</option>
                                  <option value="28">Banten</option>
                                  <option value="8">Bengkulu</option>
                                  <option value="12">DI Yogyakarta</option>
                                  <option value="9">DKI Jakarta</option>
                                  <option value="33">Gorontalo</option>
                                  <option value="5">Jambi</option>
                                  <option value="10">Jawa Barat</option>
                                  <option value="11">Jawa Tengah</option>
                                  <option value="13">Jawa Timur</option>
                                  <option value="17">Kalimantan Barat</option>
                                  <option value="18">Kalimantan Selatan</option>
                                  <option value="19">Kalimantan Tengah</option>
                                  <option value="20">Kalimantan Timur</option>
                                  <option value="31">Kalimantan Utara</option>
                                  <option value="29">Kep Bangka Belitung</option>
                                  <option value="30">Kep Riau</option>
                                  <option value="6">Lampung</option>
                                  <option value="25">Maluku</option>
                                  <option value="34">Maluku Utara</option>
                                  <option value="15">Nusa Tenggara Barat</option>
                                  <option value="16">Nusa Tenggara Timur</option>
                                  <option value="26">Papua</option>
                                  <option value="32">Papua Barat</option>
                                  <option value="7">Riau</option>
                                  <option value="35">Sulawesi Barat</option>
                                  <option value="24">Sulawesi Selatan</option>
                                  <option value="22">Sulawesi Tengah</option>
                                  <option value="23">Sulawesi Tenggara</option>
                                  <option value="21">Sulawesi Utara</option>
                                  <option value="3">Sumatera Barat</option>
                                  <option value="4">Sumatera Selatan</option>
                                  <option value="2">Sumatera Utara</option>
                                </select>
                              <button type="button" className="btn dropdown-toggle btn-default" data-toggle="dropdown" role="button" data-id="domisili" title="Aceh" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                    <div className="form-group">
                    <label className="col-md-3 control-label">Waktu Komunikasi Yang Diinginkan </label>
                    <div className="col-md-9">
                    <label>
                    <input id="waktu" type="radio" value="08.00 - 12.00" name="waktu" checked="" />&nbsp;&nbsp;08.00 - 12.00
                    </label><br />
                    <label>
                    <input id="waktu" type="radio" value="13.00 - 18.00" name="waktu" />&nbsp;&nbsp;13.00 - 18.00
                    </label>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-12">
                    <div className="form-group">
                    <label className="col-md-3 control-label">Kebutuhan Produk </label>
                    <div className="col-md-9">
                    <label>
                    <input id="produk" type="checkbox" value="Perlindungan Jiwa" name="produk" />&nbsp;&nbsp; Perlindungan Jiwa
                    </label><br />
                    <label>
                    <input id="produk" type="checkbox" value="Kesehatan" name="produk" />&nbsp;&nbsp; Kesehatan
                    </label><br />
                    <label>
                    <input id="produk" type="checkbox" value="Investasi" name="produk" />&nbsp;&nbsp; Investasi
                    </label><br />
                    <label>
                    <input id="produk" type="checkbox" value="Dana Pendidikan" name="produk" />&nbsp;&nbsp; Dana Pendidikan
                    </label>
                    <br />
                    <label>
                      <input id="produk" type="checkbox" value="Dana Pensiun" name="produk" />&nbsp;&nbsp; Dana Pensiun
                      <input id="influencer" name="influencer" className="form-control" type="hidden" value="" />
                      <input id="source" name="source" className="form-control" type="hidden" value="" />
                      <input id="medium" name="medium" className="form-control" type="hidden" value="" />
                    </label>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-12"><br />
                    &nbsp;&nbsp;<input type="checkbox" value="yes" name="setuju" /> <b>Saya, kami telah membaca, memahami dan memberikan persetujuan saya/kami kepada Sinarmas MSIG untuk mengumpulkan, menggunakan dan mengungkapkan, data pribadi saya/kami sesuai dengan <a href="https://www.sinarmasmsiglife.co.id/kebijakan" target="blank"><font color="red">Kebijakan Privasi *</font></a></b>
                    </div>
                    <br /><br />
                    <div className="col-md-12">
                    &nbsp;&nbsp;<input type="submit" className="btn btn-ajsm-dark my-3" name="submit" id="submit" value="Kirim" />
                    </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>                                                                               
          </div>
        </div>
      </section>
    </div>
  )
}