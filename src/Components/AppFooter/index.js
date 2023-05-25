import { Typography } from "antd";

function AppFooter() {
    return <div className="AppFooter">

        <Typography.Link href="tel:+123456">0717867180</Typography.Link>
        <Typography.Link href="https://www.google.com" target={"_blank"}>Privacy Policy</Typography.Link>
        <Typography.Link href="https://www.google.com" target={"_blank"}>Terms of User</Typography.Link>
    </div>
}

export default AppFooter;