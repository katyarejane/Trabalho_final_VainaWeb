import { Link } from "react-router-dom";
import linkedin from "../assets/link.png"
import git from "../assets/git.png"
import face from "../assets/face.png"
import * as S from "./styled"


export default function Header() {
  return (
    <S.Header>
        <S.BoxLogo>
            <img src="foto_perfil.png" alt="" />
            <S.Title>Kátia Rejane</S.Title>
            <S.Text>Analista de dados</S.Text>
        </S.BoxLogo>
              <S.BoxMenu>
                <ul>
                    <S.Lista linha="1px solid white"><Link to="/">Inicio</Link></S.Lista>
                    <S.Lista><Link to="/sobre">Sobre mim</Link></S.Lista>
                    <S.Lista><Link to="/projetos">Projetos</Link></S.Lista>
                </ul>
              </S.BoxMenu>
              <S.BoxIcon>
                <a href="https://www.linkedin.com/in/katiarejane/"> <img src={linkedin} alt="" /> </a>
                <a href="https://github.com/katyarejane"> <img className="borda" src={git} alt="" /> </a>
                <a href="https://www.facebook.com/katiarejanerabelo"> <img src={face} alt="" /> </a>
              </S.BoxIcon>
    </S.Header>
  )
}
