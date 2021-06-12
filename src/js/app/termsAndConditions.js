/* jscpd:ignore-start */
import React from 'react';
import { withStyles } from '@material-ui/styles';
import { PRIVACY_POLICY } from './_constants/routes';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const style = {
  root: {
    maxWidth: 1280,
    textAlign: 'justify',
    margin: '36px auto',
    padding: 36,
    lineHeight: 1.5,
    height: '90%',
    overflow: 'scroll',
    fontFamily: 'Times New Roman, serif',
  },
  adviceNote: {
    fontSize: '18px',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '24px',
  },
  subtitle: {
    fontWeight: 'bold',
    textDecoration: 'underline',
    fontSize: '17px',
  },
  underlineParagraph: {
    textDecoration: 'underline',
  },
};
export const TermsAndConditions = withStyles(style)(({ classes }) => {
  useDocumentTitle('Terms and Conditions');
  return (
    <div className={classes.root}>
      <h1 className={classes.title}>TERMS AND CONDITIONS OF THE BLOOBIRDS PLATFORM</h1>
      <p className={classes.adviceNote}>
        <b>Please read these Terms and Conditions carefully before using this Platform.</b>
      </p>
      <p>
        By using the Platform, you acknowledge that you have read and accepted these Terms and
        Conditions (hereinafter, “T&C”).
        <br />
        <br />
        If you are using the Platform on behalf of an organization, you are agreeing to these T&C
        and <a href={PRIVACY_POLICY}>Privacy Policy </a>on behalf of that organization, and
        therefore, you undertake that you have the authority to bind the organization to these T&C.
        <br />
        <br />
        If you or your organization do not agree, or do not want to be bound by these T&C and it{' '}
        <a href={PRIVACY_POLICY}>Privacy Policy</a>, you must not continue to use the Platform.
        <br />
        <br />
        We recommend that you print a copy of these T&C for future reference.
        <br />
        <br />
      </p>
      <h2 className={classes.subtitle}>1. WHO WE ARE AND HOW TO CONTACT US</h2>
      <p>
        The Bloobirds Platform (hereinafter, “the Platform”) is owned and managed by BLOOBIRDS, S.L.
        (hereinafter, We or <b>“Bloobirds”</b>).
        <br />
        <br />
        Bloobirds is registered in Spain under company number B-67294611, with registered office in
        C/ Berlín, 67, 3B, 08029 Barcelona. The company is registered with the Commercial Registry
        of Barcelona in volume 46591, book 111, page 524840.
        <br />
        <br />
        You can contact us through the following email address: info@bloobirds.com
        <br />
        <br />
      </p>
      <h2 className={classes.subtitle}>2. DESCRIPTION OF THE PLATFORM</h2>
      <p>
        The platform is a software tool addressed to help your company to better manage the
        marketing and commercial actions.
        <br />
        <br />
        The access to this Platform is limited to the authorized users indicated in the Order Form
        (the document with the details of your purchase request). The authorized users may be
        employees or suppliers that you decide to authorize (hereinafter, “the Users”) in accordance
        with these T&C. The Users shall sign in the Platform with a user name and a password.
        <br />
        <br />
        Before the registration, the Users must click the checkbox to accept these T&C and the{' '}
        <a href={PRIVACY_POLICY}>Privacy Policy</a>, undertaking to have read and accepted them and
        to assume the obligations and prohibitions indicated herein.
        <br />
        <br />
        After the registration process, the User will receive a confirmation email with an enclosed
        copy of the clauses of these T&C that apply to them, for future references.
        <br />
        <br />
        Then, the User may sign in with the user name and password to access the Platform. The
        functionalities of the Platform include the possibility of dialling phone numbers, writing
        emails and text messages, as well as saving notes, contact details, calls history, call
        recordings, and other useful information for your marketing and commercial actions.
        <br />
        <br />
        All the information uploaded to the Platform is protected under Clause 14 (Confidentiality)
        and regulated by the <a href={PRIVACY_POLICY}>Privacy Policy</a>.<br />
        <br />
        You can customize some Platform features by means of the configurations settings, as it is
        more convenient to your needs and interests. For example:
      </p>
      <ul>
        <li>
          Call recordings: The Platform offers different ways to manage the collection and storage
          of the call recordings, depending of the level of control desired. You are responsible for
          the configuration and usage of this functionality, holding us harmless for the misuse or
          the infringement of any kind of obligation or prohibition, as well as for any kind of
          damage suffered by third parties.
        </li>
        <li>
          Data protection obligations: As you will know, you are legally obliged to comply with the
          data protection obligations towards the recipients of commercial communications. At the
          configuration settings, you can, for example, choose to automatically include your own
          data protection informative clause in the first email sent to potential clients. Even if
          We provide you with a template informative clause, you are responsible for checking and
          confirming that it is adequate in accordance with the applicable law and the specific
          circumstances. The template is not a legal advice. Please note that you are responsible
          for the legitimate use of the personal data.
        </li>
        <li>
          You are responsible for complying with country specific law requirements to acquire and
          use phone numbers.
        </li>
      </ul>
      <h2 className={classes.subtitle}>3. OUR SERVICES</h2>
      <p>Our services consist in providing you and the Users with:</p>
      <ul>
        <li>Access to the Platform for the number of Users indicated in the Order Form;</li>
        <li>
          A licence (regulated in Clause 9 of these T&C) with the necessary rights to use the
          Platform by the number of Users indicated in the Order Form and in accordance with these
          T&C;
        </li>
        <li>Assistance and support regarding the use of the Platform; and</li>
        <li>Maintenance services of the Platform, in accordance with Clause 11.</li>
      </ul>
      <p>
        We do not provide any legal suggestions or legal recommendations through the Platform, but
        if We did, you are the only responsible of the consequences derived from the compliance or
        non-compliance of such recommendations.
      </p>
      <h2 className={classes.subtitle}>4. EXTRA SERVICES OFFERED BY US</h2>
      <p>
        Please note that you can request us some extra services. If you contract any of such extra
        services, they will be regulated under these T&C, but you may have to accept some additional
        clauses.
      </p>
      <h2 className={classes.subtitle}>5. MANIFESTATIONS</h2>
      <p>We warrant that the Platform:</p>
      <ul>
        <li>Will allow you to better manage your commercial and marketing actions;</li>
        <li>Will allow all the functionalities described in these T&C;</li>
        <li>
          Will duly protect the information and documentation uploaded with sufficient security
          measures;
        </li>
        <li>The Platform does not infringe third party intellectual property rights;</li>
        <li>
          We will provide you with the assistance and support needed regarding the use of the
          Platform, as well as maintenance services of the Platform.
        </li>
      </ul>
      <p>
        We do not guarantee that the Platform, or any content on it, will always be available or be
        uninterrupted. We may suspend or withdraw or restrict the availability of all or any part of
        the Platform for business and operational reasons.
      </p>
      <h2 className={classes.subtitle}>6. YOUR OBLIGATIONS</h2>
      <p>You undertake to comply with the following obligations:</p>
      <ul>
        <li>
          To use the Platform in accordance with the law and these T&C, as well as with good faith.
        </li>
        <li>
          To comply with the <a href={PRIVACY_POLICY}>Privacy Policy</a>;
        </li>
        <li>
          To guarantee that the Users comply with the law, these T&C and the{' '}
          <a href={PRIVACY_POLICY}>Privacy Policy</a>;
        </li>
        <li>To authorize no more Users than the permitted in accordance with the Order Form;</li>
        <li>
          To only authorize employees or suppliers from your company or companies of the group as
          Platform Users;
        </li>
        <li>To pay the fees indicated in the Order Form;</li>
        <li>
          To keep the confidentiality of the passwords and the information included in the Platform,
          in accordance with Clause 14;
        </li>
        <li>To grant us a license as indicated in Clause 10.</li>
      </ul>
      <p>
        You undertake to hold us harmless from any possible claim, fine, penalty or sanction that
        may it may be obliged to bear as a result of non-fulfilment by you or by a User of any of
        the obligations and/or prohibitions indicated in these T&C.
      </p>
      <h2 className={classes.subtitle}>7. OBLIGATIONS AND PROHIBITIONS FOR THE USER</h2>
      <p className={classes.underlineParagraph}>7.1 Obligations:</p>
      <ul>
        <li>
          To treat the username and password to access the Platform as confidential information, not
          disclosing them to any third party.
        </li>
        <li>To create a strong password.</li>
        <li>
          To use the Platform in accordance with the law and these T&C, as well as with good faith.
        </li>
        <li>
          To comply with the <a href={PRIVACY_POLICY}>Privacy Policy </a>and with the applicable
          legislation in data protection, including, but not limited to, processing the personal
          data with the corresponding legitimation and complying with the information duty.
        </li>
        <li>
          To check the Robinson List, if necessary, before sending marketing communications through
          the Platform.
        </li>
        <li>
          To comply with any other obligation on data protection matters with regards of the use of
          the Platform.
        </li>
        <li>
          To keep the information included in the Platform as confidential information, complying
          with Clause 14.
        </li>
      </ul>
      <p className={classes.underlineParagraph}>7.2 Prohibitions:</p>
      <ul>
        <li>
          Not to use the Platform to perform illegal activities or activities that attempt to third
          party rights.
        </li>
        <li>
          Not to transmit or address to third parties any material, including written or verbal
          information, images or sound files, photographs, videos, software…, (hereinafter, “the
          Material”) that is contrary to the law, morality, public order and these T&C. This
          includes, but not limits to, that the User undertakes to:
          <ul>
            <li>
              Not to include or disclose Material with racist, xenophobic, pornographic, illegal,
              apology of terrorism or attempting against human rights.
            </li>
            <li>
              Not to disclose, transmit or address to third parties Material attempting to
              fundamental rights or public freedoms, recognized at the Spanish Constitution and the
              international treaties.
            </li>
            <li>
              Not to disclose, transmit or address to third parties any illegal or unfair
              advertising.
            </li>
            <li>
              Not to include or disclose Material with false, ambiguous or inexact information and
              contents that are likely to misuse or confuse the recipients of the information.
            </li>
            <li>
              Not to reproduce, disclose, modify, transmit or make available to third parties
              Material without the rightholder‘s authorization.
            </li>
            <li>
              Not to disclose, transmit or address Material to third parties, infringing the data
              protection legislation and the commercial secrets regulation.
            </li>
            <li>
              Not to knowingly introduce viruses or any kind of malware that may negatively affect
              the software of the Platform or the recipient’s devices.
            </li>
            <li>
              Not to gain or attempt to gain unauthorized access to the server in which this
              Platform and the information contained in it is saved.
            </li>
            <li>
              Not to attack the Platform with a denial of service attack or a distributed denial of
              service, nor with any kind of attack that may damage the Platform or any part of it.
            </li>
          </ul>
        </li>
      </ul>
      <h2 className={classes.subtitle}>8. THE USE OF DISSOCIATED DATA</h2>
      <p>
        We may use the personal data of the Material introduced in the Platform and about the
        contacts, activity and interactions between the Users and the contacts reached through the
        Platform in order to create dissociated data that may provide statistical information for
        our clients. We are not responsible for informing the data subjects about this data
        processing.
        <br />
        <br />
        Please find more information about this processing of personal data in the{' '}
        <a href={PRIVACY_POLICY}>Privacy Policy</a>.<br />
        <br />
        You can have access to these statistical information by requesting us this extra service
        (not regulated under these T&C), as indicated in Clause 4.
        <br />
        <br />
      </p>
      <h2 className={classes.subtitle}>9. PLATFORM LICENCE AGREEMENT</h2>
      <p>
        We grant you a limited, non-exclusive, non-transferable, non-sublicensable, revocable
        license to use the Bloobirds Platform by the number of Users indicated in the Order Form,
        solely to access the services indicated in these T&C and with the following conditions:
      </p>
      <ul>
        <li>
          Material scope: We grant you and the Users all the intellectual property rights that are
          necessary to use the Platform in accordance with these T&C.
        </li>
        <li>Territorial scope: Worldwide.</li>
        <li>
          Temporal scope: What it is indicated in the Order Form. The license will be automatically
          renewed annually unless otherwise indicated or unless the parties terminate the
          contractual relationship.
        </li>
      </ul>
      <p>
        This license will be automatically revoked if you violate these T&C. We reserve all rights
        not explicitly granted herein. This license shall not be understood as an assignment of the
        intellectual property rights over the Platform nor any part of it, but only as a license of
        the rights of use.
        <br />
        <br />
        We guarantee that We are the copyright holders of the Platform, and therefore, We undertake
        to hold you harmless from any possible claim, fine, penalty or sanction derived from the
        infringement of third-party intellectual property rights regarding the Platform itself.
        <br />
        <br />
        This license does not allow you to rent, lease, license, sublicense, distribute, transfer or
        sell the Platform or any part of it, nor to create derivative works of the Platform. You
        shall not modify the Platform nor disassemble, reverse engineer or decompile the Platform or
        separate any part thereof.
        <br />
        <br />
      </p>
      <h2 className={classes.subtitle}>10. LICENCE BY YOU TO BLOOBIRDS</h2>
      <p>
        You grant us a worldwide, limited-term license to host, copy, transmit and display the
        Material as necessary for us to provide the services in accordance with these T&C. Subject
        to the limited licenses granted herein, We acquire no right, title or interest from you or
        your licensors.
        <br />
        <br />
        You also grant to us worldwide, perpetual, irrevocable, royalty-free license to use and
        incorporate into the Platform any suggestion, enhancement request, recommendation,
        correction or other feedback provided by you or the Users relating to the operation of the
        Platform.
        <br />
        <br />
      </p>
      <h2 className={classes.subtitle}>11. SUPPORT SERVICES</h2>
      <p>We offer you the support services of the Platform that are indicated in the Order Form.</p>
      <h2 className={classes.subtitle}>12. ECONOMIC CONDITIONS</h2>
      <p>
        The use of this Platform is subject to the fees and payment terms and conditions established
        in the Order Form.
      </p>
      <h2 className={classes.subtitle}>13. TERM AND TERMINATION</h2>
      <p>
        These T&C are applicable during the term indicated in the Order Form.
        <br />
        <br />
        You may terminate these T&C at any time by notifying us at least 3 months in means
        <br />
        <br />
        We may also terminate the contractual relationship with you if you do not comply with these
        T&C and/or the <a href={PRIVACY_POLICY}>Privacy Policy</a>.<br />
        <br />
        The fees already charged shall not be refunded.
        <br />
        <br />
      </p>
      <h2 className={classes.subtitle}>14. CONFIDENTIALITY</h2>
      <p>
        “Confidential Information” means all information means all information disclosed by a party
        (“Disclosing Party”) to the other party (“Receiving Party”), whether orally or in writing,
        that is designated as confidential or that reasonably should be understood to be
        confidential given the nature of the information and the circumstances of disclosure. The
        Confidential Information includes the information and documentation uploaded by the Users to
        the Platform concerning third parties personal data, business and marketing plans,
        technology and technical information, product plans and designs, and business processes; as
        well as the passwords and functionalities of the Platform.
        <br />
        <br />
        However, Confidential Information does not include any information that (i) is or becomes
        generally known to the public without breach of any obligation owed to the Disclosing Party,
        (ii) was known to the Receiving Party prior to its disclosure by the Disclosing Party
        without breach of any obligation owed to the Disclosing Party, (iii) is received from a
        third party without breach of any obligation owed to the Disclosing Party or any other
        party, or (iv) was independently developed by the Receiving Party.
        <br />
        <br />
        The Receiving Party will use the same degree of care that it uses to protect the
        confidentiality of its own confidential information of like kind (but not less than
        reasonable care) (i) not to use any Confidential Information of the Disclosing Party for any
        purpose outside the scope of these T&C, and (ii) except as otherwise authorized by the
        Disclosing Party in writing, to limit access to Confidential Information of the Disclosing
        Party to those of its and its employees and contractors who have signed confidentiality
        agreements with the Receiving Party containing protections no less stringent than those
        herein.
        <br />
        <br />
        If the Receiving Party is compelled by law to disclose the Disclosing Party’s Confidential
        Information as part of a civil or administrative proceeding to which the Disclosing Party is
        a party, and the Disclosing Party is not contesting the disclosure, the Disclosing Party
        will reimburse the Receiving Party for its reasonable cost of compiling and providing secure
        access to that Confidential Information.
        <br />
        <br />
        The confidentiality obligation provided herein shall be for an indefinite period, and shall
        remain in force even after the termination of the relationship between the Receiving Party
        and the Disclosing Party.
        <br />
        <br />
      </p>
      <h2 className={classes.subtitle}>15. SECURITY AND DATA ACCESS AGREEMENT</h2>
      <p>
        We use some of the most advanced technology for Internet security available today. When you
        access our site Secure Socket Layer (SSL) technology protects your information using both
        server authentication and data encryption, ensuring that your data is safe, secure, and
        available only to registered Users in your organization. Your data will be completely
        inaccessible to your competitors. We provide each User in your organization with a unique
        user name and password that must be entered each time a User logs in. We issue a session
        "cookie" only to record encrypted authentication information for the duration of a specific
        session. The session "cookie" does not include either the username or password of the user.
        We do not use "cookies" to store other confidential user and session information, but
        instead implement more advanced security methods based on dynamic data and encoded session
        IDs. In addition, the Platform is hosted in a secure server environment that uses a firewall
        and other advanced technology to prevent interference or access from outside intruders.
        <br />
        <br />
        In the event that you will need Customer Support and Assistance, our support and/or research
        team may need access to your account to help resolve your issue(s). By agreeing to these
        T&C, you are granting us access to your account for the sole purpose of resolving issues and
        providing you with assistance. This access will only be used for these purposes and at no
        point will data be shared or your account granted access to outside of Bloobirds, or any
        member not directly assisting with your issue. Note that if access is not granted and you
        need issue resolution our team may be limited or not able to assist you with issue
        resolution.
        <br />
        <br />
      </p>
      <h2 className={classes.subtitle}>16. SECURITY AND DATA ACCESS AGREEMENT</h2>
      <p>
        We are responsible for the functioning and maintenance of the Platform in accordance with
        the industry standard.
        <br />
        <br />
        We do not make any warranties or representations whatsoever concerning the Platform, or any
        third parties uploaded content or links. As well, We are not responsible for whatever direct
        or indirect damages that might arise in consequence of: (i) the unavailability or lack of
        accessibility to the Platform or any other Platforms with which you have established a link;
        (ii) those which cause the interruption of the operation of the Platform; (iii) of bug
        fixes, shutdowns, delays or freezing caused by shortcomings or overloading of the systems’
        functioning which can cause a deficient service, and; (iv) whatever infringement of the T&C
        here established, caused by the Users or by third parties which have accessed to the
        Platform without authorization. In general, we are not responsible for the damages that
        arise from causes outside the sphere of our foreseeable control or events of force majeure.
        <br />
        <br />
        In no event, our aggregated liability arising out of or related to these T&C exceed the
        amount paid hereunder the 12 months preceding the incident giving rise to the liability.
        This limitation will not apply in case of gross negligence or fraud.
        <br />
        <br />
        You are responsible for identifying and authenticating all Users, for approving access by
        such Users to the Platform, for controlling against unauthorized access by Users and for
        maintaining the confidentiality of usernames, passwords and account information.
        <br />
        <br />
        We are not responsible for any harm caused by the Users, including individuals who were not
        authorized to have access to the Platform but who were able to gain access because
        usernames, passwords or accounts were not terminated on a timely basis in your local
        identity management infrastructure or your local computers. You are responsible for all
        activities that occur under your and your Users’ usernames, passwords or accounts or as a
        result of your or your Users’ access to the Platform.
        <br />
        <br />
        You will also be responsible for the Users’ compliance with these T&C and for any
        consequences derived from forbidden or illegal purposes, which are contrary to law and which
        go against these T&C, and which can damage the rights and interests of third parties, or
        that in whatever way can damage, render useless, overload or deteriorate the Platform.
        <br />
        <br />
        We do not warrant whatsoever concerning the Platform, any linked Platform, or its content,
        including the availability of any Platform or the information and materials on it or the
        accuracy, completeness, or timeliness of the information and materials.
        <br />
        <br />
      </p>
      <h2 className={classes.subtitle}>
        17. RESPONSIBILITY AS SERVICE PROVIDERS AND HOSTING PROVIDERS
      </h2>
      <p>
        We inform you that, according to article 16 of the Spanish Law 34/2002, 11th July, on
        Information Society Services and Electronic Commerce, We are not responsible for the
        Material uploaded to the Platform by you or the Users, unless the circumstances detailed in
        the aforesaid article apply.
        <br />
        <br />
        We also inform you that We act as service providers, and therefore, according to article 17
        of the Spanish Law 34/2002, 11th July, on Information Society Services and Electronic
        Commerce, We will only be responsible for the content and services offered in the third
        parties linked websites, if We have effective awareness of the unlawfulness of those links
        and We have not disabled the referred links with the required due diligence. If you finally
        consider that exists a linked website with illegal or inappropriate content, please
        communicate it to us.
        <br />
        <br />
        Please note that the reception of the abovementioned communication will not mean that We
        have effective awareness of the activities and/or contents stated by the user which informs
        us.
        <br />
        <br />
        Where the Platform contains links to other websites and resources provided by third parties,
        these links are provided for your information only. Such links should not be interpreted as
        approval by us of those linked website or information you may obtain from them. Likewise, We
        do not have knowledge of the contents and services offered on those linked websites.
        Therefore, We make no representations, warranties or guarantees, whether express or implied,
        of the damages produced because of the unlawfulness, quality, the not update,
        unavailability, error or uselessness of the contents and/or services of the linked websites
        neither for any other damages that are not directly attributable to us.
        <br />
        <br />
      </p>
      <h2 className={classes.subtitle}>18. WE MAY MAKE CHANGES TO THE PLATFORM AND T&C</h2>
      <p>
        We may update and change the Platform from time to time to reflect changes to our services,
        and our business priorities. Also, We have the right at any time and without prior notice to
        amend these T&C or even to levy new T&C with respect to access to or use the Platform.
        <br />
        <br />
        Any access or use of the Platform by you or the Users after notice of revisions or additions
        to these T&C shall constitute your agreement to such revisions or additions.
        <br />
        <br />
      </p>
      <h2 className={classes.subtitle}>18. WE MAY MAKE CHANGES TO THE PLATFORM AND T&C</h2>
      <p>
        These T&C are governed by the Spanish law. The access or use of the Platform means that you
        agree that the exclusive jurisdiction will be of the courts of Barcelona.
      </p>
    </div>
  );
});
/* jscpd:ignore-end */
