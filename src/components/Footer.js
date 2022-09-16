
const Footer = () => {
    const language=['Português (Brazil)','English (US)','Español','Français (France)','Italiano']

    const termos=['Cadastre-se','Entrar','Messenger','Facebook Lite','Watch','Pessoas','Páginas','Categoria de Página','Locais','Jogos','MarketPlace','Facebook Play','Grupos','Oculos','Portal','Instagram','Local','Campanhas de arrecadação de fundos','Serviços','Central de informações de Votação','Sobre','Criar anúncios','Criar Página','Desenvolvedores','Carreiras','Privacidade','Cookies','Escolha para aúncios','Termos','Ajuda']
  return (
    <footer>
        <div className="md:w-980px mx-auto py-8 text-center md:text-current">
            <div>
                <ul className="grid grid-cols-2 md:flex text-gray-600 text-xs md:text-sm">
                    {
                        language.map((item,index)=>(
                            <li className="mr-3">
                                <a href="." key={index} className='hover:underline'>{item}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="hidden md:block border-t border-gray-600 pt-3 mt-3"></div>
            <div>
                <ul className="hidden md:flex md:flex-wrap text-gray-600 text-sm">
                    {
                        termos.map((item,index)=>(
                            <li className="mr-3">
                                <a href="." key={index} className='hover:underline'>{item}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="pt-4 text-sm text-gray-600 text-center md:text-left">
                <p>Facebook &copy; 2022</p>
            </div>

        </div>
    </footer>
  )
}

export default Footer