const YOUR_PUBLIC_KEY = process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY||'user_O7Dl8VgCjPvhN1oRMGf4x'
const YOUR_SERVICE_ID = process.env.NEXT_PUBLIC_YOUR_SERVICE_ID||'service_h58fg4x'
import emailjs from '@emailjs/browser';

//template_z0hdwur newsletter -old
//template_jhqchg6 contact form -old

//template_prpo9xc newsletter -new
//template_a6rk8rr contact form -new
//template_la6jmjf cv upload - new

const templateMap = [
    { templateTitle: "newsLetterWithNameAndEmail", templateId: "template_prpo9xc" },
    { templateTitle: "askAQuestion", templateId: "template_a6rk8rr" },
    { templateTitle: "newsLetterWithEmail", templateId: "template_prpo9xc" },
    { templateTitle: "smartupContactform", templateId: "template_a6rk8rr" },
    { templateTitle: "contactForm", templateId: "template_a6rk8rr" },
    { templateTitle: "newsLetterWithNameAndEmailInBlog", templateId: "template_prpo9xc" },
    { templateTitle: "fromBlogNewsLetter", templateId: "template_prpo9xc" },
    { templateTitle: "fromNewsBannerNewsLetter", templateId: "template_prpo9xc" },
    { templateTitle: "fromSmartupBlogsBannerNewsLetter", templateId: "template_prpo9xc" },
    { templateTitle: "fromSmartupBlogBannerNewsLetter", templateId: "template_prpo9xc" },
    { templateTitle: "popupCommon", templateId: "template_a6rk8rr" },
    { templateTitle: "testBookConsultationCall", templateId: "template_a6rk8rr" },//repetition starts
    { templateTitle: "aboutUsBookAConsulatation", templateId: "template_a6rk8rr" },
    { templateTitle: "teamMsianBookAConsulatation", templateId: "template_a6rk8rr" },
    { templateTitle: "workWithUsBookAConsulatation", templateId: "template_a6rk8rr" },
    { templateTitle: "workWithUsFileupload", templateId: "template_la6jmjf" },

]

const sendEmail = async (templateTitle, templateParams) => {
    try {
        const templateId = templateMap.find(item => item.templateTitle === templateTitle)?.templateId || null
        if (templateId && templateParams) {
            const response = await emailjs.send(YOUR_SERVICE_ID, templateId, templateParams, YOUR_PUBLIC_KEY)
            console.log("mailer response", response)
            console.log('SUCCESS status', response.status, response.text);
            if (response.status === 200) {
                return { success: true, msg: "Request send successfully" }
            }
        }
        return { success: false, msg: "Error in sending request" }


    }
    catch (err) {
        console.log("email sent error", err)
        return { success: false, msg: "Network error in sending request" }

    }
}
export const sendFormEmail = async (templateTitle, templateParams) => {
    try {
        const templateId = templateMap.find(item => item.templateTitle === templateTitle)?.templateId || null
        if (templateId && templateParams) {
            const response = await emailjs.sendForm(YOUR_SERVICE_ID, templateId, templateParams,YOUR_PUBLIC_KEY);
            console.log("mailer response", response)
            console.log('SUCCESS status', response.status, response.text);
            if (response.status === 200) {
                return { success: true, msg: "Request send successfully" }
            }
        }
        return { success: false, msg: "Error in sending request" }


    }
    catch (err) {
        console.log("email sent error", err)
        return { success: false, msg: "Network error in sending request" }

    }
}
export default sendEmail