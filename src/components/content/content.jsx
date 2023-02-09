import {ContentStyled} from "@/components/content/content.styles";

export const Content = ({children}) => {
    return (
        <>
            <ContentStyled>
                {children}
            </ContentStyled>
        </>
    )
}