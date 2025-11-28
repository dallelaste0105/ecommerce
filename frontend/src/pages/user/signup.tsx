import SignupComponent from "../../components/user/SignupComponent";
import { Link } from 'react-router-dom';

export default function SignupScreen() {
    return(
        <div>
            <SignupComponent/>
            <p>
                Já tem uma conta?
                <Link to="/login">
                    Faça Login
                </Link>
                <Link to="/test">
                    Teste
                </Link>
                <Link to="/createproduct">
                    Criar Produto
                </Link>
            </p>
        </div>
    )
}