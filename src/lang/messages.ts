import DAboutMe from "@/data/DAboutMe"
import DBanner from "@/data/DBanner"
import DEducationExperience from "@/data/DJobs"
import DNavbar from "@/data/DNavbar"
import DPresentationAboutMe from "@/data/DPresentationAboutMe"
import DSubtitle from "@/data/DSubtitle"
import DService from "@/data/DService"
import DCategory from "@/data/DCategory"
import DContactForm from "@/data/DContactForm"

export const messages = {
    en: {
        navbar: DNavbar.EnNavbar,
        subtitle: DSubtitle.EnSubtitles,
        banner: DBanner.EnBanner,
        presentationAboutMe: DPresentationAboutMe.EnPresentationAboutMe,
        aboutMe: DAboutMe.EnAboutMe,
        categories: DCategory.EnCategories,
        jobs: DEducationExperience.EnJobs, 
        services: DService.EnServices,
        contactForm: DContactForm.EnContactForm
    },
    es: {
        navbar: DNavbar.EsNavbar,
        subtitle: DSubtitle.EsSubtitles,
        banner: DBanner.EsBanner,
        presentationAboutMe: DPresentationAboutMe.EsPresentationAboutMe,
        aboutMe: DAboutMe.EsAboutMe,
        categories: DCategory.EsCategories,
        jobs: DEducationExperience.EsJobs,
        services: DService.EsServices,
        contactForm: DContactForm.EsContactForm
    }
}