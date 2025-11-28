import api from "../../api"

export default function test() {

    async function test() {
        
        try {
            const res = await api.get("/credential/test", { withCredentials: true });
            
            window.alert(res.data["message"]);
        } catch (err:any) {
            if (err.response) {
            window.alert(err.response.data.message);
        } else {
            // erro inesperado (sem resposta do servidor)
            window.alert("Erro inesperado no login");
        }
        }
        
    }

    return <div>
        <button onClick={test}>pegar seu nome</button>
    </div>
}