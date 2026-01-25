export default function PrivacyPolicyPage() {
  return (
    <div className="px-6 pt-32 pb-24 bg-dark text-secondary">

      {/* Header */}
      <section className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-semibold mb-6">
          Privacy <span className="text-accent">Policy</span>
        </h1>
        <p className="text-secondary/70">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto space-y-12 text-secondary/80 leading-relaxed">

        {/* Intro */}
        <p>
          At <span className="text-secondary font-medium">Dream Creation</span>,
          your privacy is important to us. This Privacy Policy explains how we
          collect, use, and protect your personal information when you use our
          platform.
        </p>

        {/* Information We Collect */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-secondary">
            1. Information We Collect
          </h2>
          <ul className="space-y-3 list-disc list-inside">
            <li>Personal information such as name and email address</li>
            <li>Account login details</li>
            <li>Project data and content you create</li>
            <li>Usage data such as pages visited and actions performed</li>
          </ul>
        </div>

        {/* How We Use Information */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-secondary">
            2. How We Use Your Information
          </h2>
          <ul className="space-y-3 list-disc list-inside">
            <li>To provide and maintain our services</li>
            <li>To improve platform features and user experience</li>
            <li>To communicate important updates and notifications</li>
            <li>To ensure platform security and prevent misuse</li>
          </ul>
        </div>

        {/* Data Security */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-secondary">
            3. Data Security
          </h2>
          <p>
            We implement industry-standard security measures to protect your
            data. However, no method of transmission over the internet is
            completely secure, and we cannot guarantee absolute security.
          </p>
        </div>

        {/* Sharing Information */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-secondary">
            4. Sharing of Information
          </h2>
          <p>
            We do not sell or rent your personal data. Information may only be
            shared when required by law or to protect the rights and safety of
            Dream Creation and its users.
          </p>
        </div>

        {/* Cookies */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-secondary">
            5. Cookies
          </h2>
          <p>
            We may use cookies and similar technologies to enhance user
            experience, analyze usage, and improve our services. You can manage
            cookie preferences in your browser settings.
          </p>
        </div>

        {/* User Rights */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-secondary">
            6. Your Rights
          </h2>
          <ul className="space-y-3 list-disc list-inside">
            <li>Access and update your personal information</li>
            <li>Request deletion of your account</li>
            <li>Withdraw consent where applicable</li>
          </ul>
        </div>

        {/* Changes */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-secondary">
            7. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will
            be posted on this page with an updated revision date.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-secondary">
            8. Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <span className="text-accent font-medium">
              support@dreamcreation.com
            </span>
            .
          </p>
        </div>

      </section>
    </div>
  );
}
