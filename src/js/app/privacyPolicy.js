/* jscpd:ignore-start */
import React from 'react';
import { withStyles } from '@material-ui/styles';
import { cssVariables } from '../style/variables';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const style = {
  root: {
    maxWidth: 1280,
    textAlign: 'justify',
    margin: '36px auto',
    width: '60%',
    padding: 36,
    lineHeight: 1.5,
    height: '90%',
    overflow: 'scroll',
    fontFamily: 'Times New Roman, serif',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '24px',
    textDecoration: 'underline',
  },
  table: {
    width: '100%',
  },
  tableBody: {
    backgroundColor: `${cssVariables.color.gunmetal.veryLightOpacity}`,
  },
  tableBodyCell: {
    border: `1px solid ${cssVariables.color.gunmetal.light}`,
    padding: '10px',
  },
  textEmphasize: {
    backgroundColor: cssVariables.color.banana.veryLight,
  },
  tableHeader: {
    border: `1px solid ${cssVariables.color.gunmetal.light}`,
    backgroundColor: `${cssVariables.color.gunmetal.veryVeryLigth}`,
  },
  tableHeaderCell: {
    border: `1px solid ${cssVariables.color.gunmetal.light}`,
    padding: '10px',
    minWidth: '110px',
  },
  thirdHeader: {
    fontSize: '13px',
  },
  subtitle: {
    fontWeight: 'bold',
    textDecoration: 'underline',
    fontSize: '17px',
  },
};

export const PrivacyPolicy = withStyles(style)(({ classes }) => {
  useDocumentTitle('Privacy Policy');
  return (
    <div className={classes.root}>
      <h1 className={classes.title}>PRIVACY POLICY OF THE BLOOBIRDS PLATFORM</h1>
      <p>
        We, BLOOBIRDS, S.L. (hereinafter referred to as “BLOOBIRDS”), welcome you to our Privacy
        Policy.
        <br />
        <br />
        We respect your privacy and are committed to protecting your personal data. This Privacy
        Policy will inform you as to how we look after your personal data when you use our Platform,
        as well as to inform you about your privacy rights and how the law protects you. If you
        provide the Platform with access to Gmail or other Google tools, please check Clause 12.
        <br />
        <br />
        <b>We highly recommend you to read our Privacy Policy carefully.</b> Please also use the
        Glossary to understand the meaning of some of the terms used in this privacy policy and do
        not hesitate to contact us if you have any doubt.
        <br />
        <br />
      </p>
      <h2 className={classes.subtitle}>1. IMPORTANT INFORMATION AND WHO WE ARE</h2>
      <p>
        <b>Contact details:</b>
        <br />
        <br />
        BLOOBIRDS is the Controller of your personal data.
        <br />
        <br />
        Our contact details are:
        <br />
        <br />
        Full name of the organization: BLOOBIRDS, S.L.
        <br />
        Address: C/ Berlin, 67,3B, 08029 Barcelona - Spain
        <br />
        Email: info@bloobirds.com
        <br />
        <br />
      </p>
      <h2 className={classes.subtitle}>2. THE DATA WE COLLECT ABOUT YOU AS DATA CONTROLLER</h2>
      <p>
        Personal data, or personal information, means any information about an individual from which
        that person can be identified. It does not include data where the identity has been removed
        (anonymous data).
        <br />
        We may collect, use, store and transfer different kinds of personal data about you, which we
        have grouped together as follows:
        <br />
      </p>
      <ul>
        <li>
          <b>Identity Data</b> includes first name and surname, username or similar identifier.
          <br />
          <br />
        </li>
        <li>
          <b>Contact Data</b> includes{' '}
          <span className={classes.textEmphasize}>address and phone number.</span>
          <br />
          <br />
        </li>
        <li>
          <b>Technical Data</b> includes internet protocol (IP) address, your login data, browser
          type and version, time zone setting and location, browser plug-in types and versions,
          operating system and platform and other technology on the devices you use to access this
          Platform.
          <br />
          <br />
        </li>
        <li>
          <b>User Data</b> includes your username and password.
          <br />
          <br />
        </li>
        <li>
          <b>Usage Data</b> includes information about how you use our Platform.
          <br />
          <br />
        </li>
      </ul>
      <p>
        As indicated in the Terms and Conditions, the functionalities of the Platform include the
        possibility of dialling phone numbers, writing emails and text messages, as well as saving
        notes, contact details, calls history, call recordings, and other useful information for
        your marketing and commercial actions.
        <br />
        <br />
        The user and its employer are responsible for complying with data protection legislation in
        relation to data included into the platform, for which Bloobirds is not responsible.
        <br />
        <br />
        Bloobirds will not be responsible for any infringement of data protection caused using the
        platform by the user or the client of Bloobirds.
        <br />
        <br />
        <b>If you fail to provide personal data</b>
        <br />
        Where we need to collect personal data by law, or under the terms of the Platform’s General
        Terms and Conditions, if you fail to provide that personal data, we may not be able to
        provide you with access to the Platform.
        <br />
        <br />
      </p>
      <h2 className={classes.subtitle}>3. HOW IS YOUR PERSONAL DATA COLLECTED</h2>
      <p>
        We collect your personal data at the beginning of the contractual relationship and when you
        sign up and use our Platform.
      </p>
      <h2 className={classes.subtitle}>4. HOW WE USE YOUR PERSONAL DATA</h2>
      <p>
        We will only use your personal data when the law allows us to. Most commonly, we will use
        your personal data in the following circumstances and for the following purposes:
        <br />
      </p>
      <table className={classes.table}>
        <tr className={classes.tableHeader}>
          <th className={classes.tableHeaderCell}>Purpose/Activity</th>
          <th className={classes.tableHeaderCell}>Type of data (among others)</th>
          <th className={classes.tableHeaderCell}>Lawful basis for processing</th>
        </tr>
        <tr className={classes.tableBody}>
          <td className={classes.tableBodyCell}>To register you as a new user of the Platform.</td>
          <td className={classes.tableBodyCell}>
            (a) Identity
            <br />
            (b) Contact
            <br />
            (c) User
            <br />
          </td>
          <td className={classes.tableBodyCell}>
            Performance of a contract with you (our T&C for Users)
          </td>
        </tr>
        <tr className={classes.tableBody}>
          <td className={classes.tableBodyCell}>
            To provide you with access to the contents of the Platform.
          </td>
          <td className={classes.tableBodyCell}>
            (a) Identity
            <br />
            (b) Contact
            <br />
            (c) User
            <br />
            (d) Usage
            <br />
          </td>
          <td className={classes.tableBodyCell}>
            Performance of a contract with you (our T&C for Users)
          </td>
        </tr>
        <tr className={classes.tableBody}>
          <td className={classes.tableBodyCell}>
            To manage and protect our business and this Platform (including troubleshooting, system
            maintenance, support, reporting and hosting of data).
          </td>
          <td className={classes.tableBodyCell}>
            (a) Identity
            <br />
            (b) Contact
            <br />
            (c) Technical
            <br />
          </td>
          <td className={classes.tableBodyCell}>
            (a) Necessary for our legitimate interests.
            <br />
            (for running our business, provision of administration and IT services, network
            security, to prevent fraud and in the context of a business reorganisation or group
            restructuring exercise).
            <br />
            (b) Performance of the contract with you.
            <br />
            (c) Necessary to comply with legal obligations.
            <br />
          </td>
        </tr>
        <tr className={classes.tableBody}>
          <td className={classes.tableBodyCell}>
            To send marketing communications to you by email or text message.
          </td>
          <td className={classes.tableBodyCell}>
            (a) Identity
            <br />
            (b) Contact
            <br />
          </td>
          <td className={classes.tableBodyCell}>
            <span className={classes.textEmphasize}>
              The legal basis is your consent, which you explicitly gave to us.
            </span>
          </td>
        </tr>
        <tr className={classes.tableBody}>
          <td className={classes.tableBodyCell}>
            To manage our relationship with you which will include billing of contracted services
            and notifying you about changes to our T&C or Privacy Policy.
          </td>
          <td className={classes.tableBodyCell}>
            (a) Identity
            <br />
            (b) Contact
            <br />
          </td>
          <td className={classes.tableBodyCell}>
            Performance of a contract with you (our T&C for Users)
          </td>
        </tr>
      </table>
      <br />
      <p>
        <b>Change of purpose</b>
        We will only use your personal data for the purposes for which we collected it, unless we
        reasonably consider that we need to use it for another reason and that reason is compatible
        with the original purpose..
        <br />
        <br />
        If we need to use your personal data for an unrelated purpose, we will notify you and we
        will explain the legal basis which allows us to do so..
        <br />
        <br />
        Please note that we may process your personal data without your knowledge or consent, in
        compliance with the above rules, where this is required or permitted by law.
        <br />
        <br />
      </p>
      <h2 className={classes.subtitle}>5. DISCLOSURES OF YOUR PERSONAL DATA</h2>
      <p>
        We may have to share your personal data with external third parties to whom we may choose to
        sell, transfer, or merge parts of our business or our assets. Alternatively, we may seek to
        acquire other businesses or merge with them. If a change happens to our business, then the
        new owners may use your personal data in the same way as set out in this Privacy Policy.
        <br />
        <br />
        We require all third parties to respect the security of your personal data and to treat it
        in accordance with the applicable law. We do not allow our third-party service providers to
        use your personal data for their own purposes and only permit them to process your personal
        data for specified purposes and in accordance with our instructions.
        <br />
        <br />
      </p>
      <h2 className={classes.subtitle}>6. NON PERSONALLY IDENTIFIABLE INFORMATION</h2>
      <p>
        As indicated in the Terms and Conditions, we may make certain aggregated information
        available to third parties for (i) business or marketing purposes; or (ii) statistical
        purposes, all of the foregoing being subject to additional limits on use of your Google User
        data as stated in this Privacy Policy (Clause 12).
        <br />
        <br />
        <br />
        In this regard and unless legal requirements prevent it and/or you have objected or have not
        consented, the personal data shall be dissociated in such a way that no one shall be able to
        relate the information with you and the resulting information (which shall no longer include
        personal data) shall be able to be used for statistical purposes.
        <br />
        <br />
      </p>
      <h2 className={classes.subtitle}>7. INTERNATIONAL TRANSFERS</h2>
      <p>
        We do not transfer your personal data outside the European Economic Area (EEA), but if we
        do, we will do in accordance with data protection regulations using standard contractual
        clauses adapted by the European Commission and the EU-US Privacy Shield as a guarantee for
        those transfers made to countries that do not have an adequacy decision from the European
        Commission.
        <br />
        <br />
        Third parties with whom we wish to share certain personal data (for e.g. Salesforce, Amazon,
        HubSpot), must first demonstrate that they have taken appropriate technical and
        organisational measures to protect the data and then sign a data processing agreement that
        ensures the confidentiality and security of the data.
        <br />
        <br />
      </p>
      <h2 className={classes.subtitle}>8. DATA SECURITY</h2>
      <p>
        We have put in place appropriate security measures to prevent your personal data from being
        accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In
        addition, we limit access to your personal data to those employees, agents, contractors and
        other third parties who have a business need to know. They will only process your personal
        data on our instructions and they are subject to a duty of confidentiality.
        <br />
        <br />
        We have put in place procedures to deal with any suspected personal data breach and will
        notify you and any applicable regulator of a breach where we are legally required to do so.
        <br />
        <br />
      </p>
      <h2 className={classes.subtitle}>9. DATA RETENTION</h2>
      <p>
        <b>How long will you use my personal data for?</b>
        <br />
        <br />
        We will only retain your personal data for as long as necessary to fulfil the purposes we
        collected it for, including for the purposes of satisfying any legal, accounting, or
        reporting requirements.
        <br />
        <br />
        To determine the appropriate retention period for personal data, we consider the amount,
        nature, and sensitivity of the personal data, the potential risk of harm from unauthorised
        use or disclosure of your personal data, the purposes for which we process your personal
        data and whether we can achieve those purposes through other means, and the applicable legal
        requirements.
        <br />
        <br />
        In some circumstances, you can ask us to delete your data: see “Request erasure” below
        (Clause 11) for further information.
        <br />
        <br />
      </p>
      <h2 className={classes.subtitle}>10. BLOOBIRDS AS DATA PROCESSOR</h2>
      <p>
        We may process the information and personal data that you introduce at the Platform acting
        in our role as Data Processor. Please check Annex I. This Annex is the Data Processing
        Agreement between your organization and Bloobirds.
        <br />
        <br />
      </p>
      <h2 className={classes.subtitle}>11. YOUR LEGAL RIGHTS</h2>
      <p>
        You have the right to obtain information regarding the processing that BLOOBIRDS does with
        your personal data. In particular:
      </p>
      <ul>
        <li>
          <b>Request access</b> to your personal data (commonly known as a "data subject access
          request"). This enables you to receive a copy of the personal data we hold about you and
          to check that we are lawfully processing it. Request correction of the personal data that
          we hold about you. This enables you to have any incomplete or inaccurate data we hold
          about you corrected, though we may need to verify the accuracy of the new data you provide
          to us.
          <br />
          <br />
        </li>
        <li>
          <b>Request erasure</b> of your personal data. This enables you to ask us to delete or
          remove personal data where there is no good reason for us continuing to process it. You
          also have the right to ask us to delete or remove your personal data where you have
          successfully exercised your right to object to processing (see below), where we may have
          processed your information unlawfully or where we are required to erase your personal data
          to comply with local law. Note, however, that we may not always be able to comply with
          your request of erasure for specific legal reasons which will be notified to you, if
          applicable, at the time of your request.
          <br />
          <br />
        </li>
        <li>
          <b>Object to processing</b> of your personal data where we are relying on a legitimate
          interest (or those of a third party) and there is something about your particular
          situation which makes you want to object to processing on this ground as you feel it
          impacts on your fundamental rights and freedoms. In some cases, we may demonstrate that we
          have compelling legitimate grounds to process your information which override your rights
          and freedoms.
          <br />
          <br />
        </li>
        <li>
          <b>Request restriction of processing</b> of your personal data. This enables you to ask us
          to suspend the processing of your personal data in the following scenarios: (a) if you
          want us to establish the data's accuracy; (b) where our use of the data is unlawful but
          you do not want us to erase it; (c) where you need us to hold the data even if we no
          longer require it as you need it to establish, exercise or defend legal claims; or (d) you
          have objected to our use of your data but we need to verify whether we have overriding
          legitimate grounds to use it.
          <br />
          <br />
        </li>
        <li>
          <b>Request the transfer</b> of your personal data to you or to a third party. We will
          provide to you, or a third party you have chosen, your personal data in a structured,
          commonly used, machine-readable format. Note that this right only applies to automated
          information which you initially provided consent for us to use or where we used the
          information to perform a contract with you.
          <br />
          <br />
        </li>
        <li>
          <b>Withdraw consent at any time</b> where we are relying on consent to process your
          personal data. However, this will not affect the lawfulness of any processing carried out
          before you withdraw your consent. If you withdraw your consent, we may not be able to
          provide certain products or services to you. We will advise you if this is the case at the
          time you withdraw your consent.
          <br />
          <br />
        </li>
      </ul>
      <p>
        The rights above may be exercised by sending an e-mail to{' '}
        <a href={'www.privacy@bloobirds.com'}>privacy@bloobirds.com</a> and following our
        instructions.
        <br />
        <br />
        If you believe our processing of personal data about you is inconsistent with the applicable
        data protection regulations, you have the right to lodge a complaint to the Data Protection
        Authority, especially when you have not obtained satisfaction in the exercise of your
        rights. Please for further information regarding supervisory authorities, you can consult
        the following link: <a href={'https://www.aepd.es/.'}>https://www.aepd.es/.</a>
        <br />
        <br />
        In any case, before lodging a complaint to the supervisory authority, we would thank you if
        you could contact us sending an email to{' '}
        <a href={'privacy@bloobirds.com'}>privacy@bloobirds.com</a> in order to solve any dispute
        arise in a friendly way.
        <br />
        <br />
        <b>No fee usually required</b>
        <br />
        <br />
        You will not have to pay a fee to access your personal data (or to exercise any of the other
        rights). However, we may charge a reasonable fee if your request is clearly unfounded,
        repetitive or excessive. Alternatively, we may refuse to comply with your request in these
        circumstances.
        <br />
        <br />
        <br />
        <b>What we may need from you</b>
        <br />
        <br />
        We may need to request specific information from you to help us confirm your identity and
        ensure your right to access your personal data (or to exercise any of your other rights).
        This is a security measure to ensure that personal data is not disclosed to any person who
        has no right to receive it. We may also contact you to ask you for further information in
        relation to your request to speed up our response.
        <br />
        <br />
        <br />
        <b>Time limit to respond</b>
        <br />
        <br />
        We try to respond to all legitimate requests within one month. Occasionally it may take us
        longer than a month if your request is particularly complex or you have made a number of
        requests. In this case, we will notify you and keep you updated.
        <br />
        <br />
      </p>
      <h2 className={classes.subtitle}>12. GLOSSARY</h2>
      <p>
        Notwithstanding anything else in this Privacy Policy, if you provide the Platform with
        access to your Google data, the Platform’s use of that data will be subject to these
        additional restrictions:
        <br />
        The Platform will only use access to read, write, modify or control Google message bodies
        (including attachments), metadata, headers, and settings to provide a web email client that
        allows users to compose, send, read and process emails and will not transfer this Gmail data
        to others unless doing so is necessary to provide and improve these features, comply with
        applicable law, or as part of a merger, acquisition, or sale of assets.
        <br />
        The Platform will not use this Google data for serving advertisements.
        <br />
        The Platform will not allow humans to read this data unless we have your affirmative
        agreement for specific messages, doing so is necessary for security purposes such as
        investigating abuse, to comply with applicable law, or for the Platform's internal
        operations and even then only when the data have been aggregated and anonymized.
        <br />
        The Platform’s use of information received, and the Platform’s transfer of information to
        any other app or platform, from Google APIs will adhere to Google’s Limited Use
        Requirements.
        <br />
      </p>
      <h2 className={classes.subtitle}>13. GLOSSARY</h2>
      <h3 className={classes.thirdHeader}>
        <b>LAWFUL BASIS</b>
      </h3>
      <p>
        <b>Legitimate Interest</b> means the interest of our business in conducting and managing our
        business to enable us to give you the best service/product and the best and most secure
        experience. We make sure we consider and balance any potential impact on you (both positive
        and negative) and your rights before we process your personal data for our legitimate
        interests. We do not use your personal data for activities where our interests are
        overridden by the impact on you (unless we have your consent or are otherwise required or
        permitted to by law). You can obtain further information about how we assess our legitimate
        interests against any potential impact on you in respect of specific activities by
        contacting us.
        <br />
        <br />
        <b>Performance of Contract</b> means processing your data where it is necessary for the
        performance of a contract to which you are a party or to take steps at your request before
        entering into such a contract, including to access or use the Platform.
        <br />
        <br />
        <b>Comply with a legal or regulatory obligation</b> means processing your personal data
        where it is necessary for compliance with a legal or regulatory obligation that we are
        subject to.
        <br />
        <br />
      </p>
    </div>
  );
});
/* jscpd:ignore-end */
