import SignupComponent from "../../components/credential/SignupComponent";
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
                <br />
                <Link to="/test">
                    Teste
                </Link>
                <br />
                <Link to="/createproduct">
                    Criar Produto
                </Link>ViewProducts
                <br />
                <Link to="/viewproducts">
                    View Products
                </Link>
                <br />
                <Link to="/createcampaignpromotion">
                    Criar promoção ou campanha
                </Link>
            </p>
        </div>
    )
}