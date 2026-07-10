import { Bank, CreditCard, Heart, Money, Sparkle } from "phosphor-react";

const donationDetails = {
  usa: {
    title: "In USA",
    checks: "Payable to Alagappa Foundation",
    mailTo: "1647 Andorre Glen, Escondido, CA 92029",
    paypal: "https://www.paypal.com/donate/?hosted_button_id=C68Y9LXAS5X78",
  },
  india: {
    title: "In INDIA",
    upiId: "113014291081181@cnrb",
    bankName: "Canara Bank",
    accountNumber: "0903101081181",
    ifscCode: "CNRB0000903",
    branch: "Karaikudi, Tamil Nadu",
  },
};

export default function Donate() {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#f5f8fc_0%,_#eef5ff_100%)] text-slate-800">
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:items-start">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#cfe0f5] bg-white/90 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#0057b8] shadow-sm">
              <Heart size={16} weight="fill" />
              Support Our Mission
            </span>
            <h1 className="mt-6 text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
              Donate to the Alagappa Mission
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Late Dr. RM. Alagappa Chettiar, the philanthropist and visionary who transformed Karaikudi by establishing a galaxy of educational institutions, donated all his wealth including his home to bring primary, secondary and tertiary education to this rural community.
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              We appeal to you to support our projects through your generous contributions and help continue this legacy of service and education.
            </p>
            <div className="mt-8 rounded-[24px] border border-[#dbe8f8] bg-white/90 p-6 shadow-[0_14px_50px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-3 text-[#0057b8]">
                <div className="rounded-2xl bg-[#eef6ff] p-3">
                  <Sparkle size={20} weight="fill" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Your contribution helps</p>
                  <h2 className="text-xl font-bold text-slate-900">Expand education, opportunity and service</h2>
                </div>
              </div>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
                <li className="flex gap-3"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#0057b8]" /> Support schools, colleges and student development programs.</li>
                <li className="flex gap-3"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#0057b8]" /> Sustain scholarships, facilities and educational innovation.</li>
                <li className="flex gap-3"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#0057b8]" /> Continue the legacy of Dr. RM. Alagappa Chettiar.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3 text-[#0057b8]">
              <CreditCard size={22} />
              <h2 className="text-2xl font-bold text-slate-900">{donationDetails.usa.title}</h2>
            </div>
            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
              <div className="rounded-[20px] border border-dashed border-slate-300 bg-[#f8fbff] p-4 text-center">
                <p className="font-semibold text-slate-900">Scan QR to donate</p>
                <div className="mt-3 flex justify-center">
                  <img src="/donate/donate_qr_usa.png" alt="USA donation QR" className="h-56 w-56 rounded-2xl object-contain bg-white p-2 shadow-sm" />
                </div>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Checks</p>
                <p>{donationDetails.usa.checks}</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Mail to</p>
                <p>{donationDetails.usa.mailTo}</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">PayPal</p>
                <a href={donationDetails.usa.paypal} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#0057b8] hover:underline">
                  Donate via PayPal
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3 text-[#0057b8]">
              <Bank size={22} />
              <h2 className="text-2xl font-bold text-slate-900">{donationDetails.india.title}</h2>
            </div>
            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
              <div className="rounded-[20px] border border-dashed border-slate-300 bg-[#f8fbff] p-4 text-center">
                <p className="font-semibold text-slate-900">Scan QR to donate</p>
                <div className="mt-3 flex justify-center">
                  <img src="/donate/donate_qr_india.jpg" alt="India donation QR" className="h-56 w-56 rounded-2xl object-contain bg-white p-2 shadow-sm" />
                </div>
              </div>
              <div>
                <p className="font-semibold text-slate-900">UPI ID</p>
                <p>{donationDetails.india.upiId}</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Bank transfer</p>
                <p>Bank Name: {donationDetails.india.bankName}</p>
                <p>Account Number: {donationDetails.india.accountNumber}</p>
                <p>IFSC Code: {donationDetails.india.ifscCode}</p>
                <p>Branch: {donationDetails.india.branch}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-[28px] border border-slate-200 bg-[#0057b8] p-8 text-white shadow-sm">
          <div className="flex items-center gap-3">
            <Money size={22} />
            <h2 className="text-2xl font-bold">For any queries</h2>
          </div>
          <p className="mt-4 max-w-2xl text-base leading-8 text-blue-50">
            Please feel free to mail us at <a href="mailto:admin@alagappa.org" className="font-semibold underline">admin@alagappa.org</a> for any donation-related queries.
          </p>
        </div>
      </section>
    </div>
  );
}
