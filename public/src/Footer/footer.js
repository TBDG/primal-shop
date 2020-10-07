const Footer = (props) => {
    
    return (
        <div id='footer'>
            <ul id='footer-nav'>
                <li><a href={props.nav[0].link}>{props.nav[0].name}</a></li>
                <li><a href={props.nav[1].link}>{props.nav[1].name}</a></li>
                <li><a href={props.nav[2].link}>{props.nav[2].name}</a></li>
                <li><a href={props.nav[3].link}>{props.nav[3].name}</a></li>
                <li><a href={props.nav[4].link}>{props.nav[4].name}</a></li>
                <li><a href={props.nav[5].link}>{props.nav[5].name}</a></li>
                <li><a href={props.nav[6].link}>{props.nav[6].name}</a></li>
            </ul>

            <br id='footer-line-break'/>

            <ul id='social-media'>
                <li><a href={props.socialMedia[0]} target="_blank">FaceBook</a></li>
                <li><a href={props.socialMedia[1]} target="_blank">Twitter</a></li>
                <li><a href={props.socialMedia[2]} target="_blank">Instagram</a></li>
                <li><a href={props.socialMedia[3]} target="_blank">Youtube</a></li>
            </ul>

        </div>
    )
}