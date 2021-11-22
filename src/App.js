import React, { useEffect, useState } from "react";
import * as Service from'./service';
import "./App.css";

function App() {
const [itemsList,setItemsList] = useState([])

useEffect(() => {
  const loadAll = async () => {
    const list = await Service.getAll();
    setItemsList(list);
  };
  
  loadAll();
  console.log(itemsList);
}, []);

	return (
		<div className="App">
			<main className="texto-centro">
				<header className="texto-principal">
					<h1>CONTROLE DE ESTOQUE</h1>
				</header>
				<section className="entrada-dados container">
					<p>Preencha os campos para adicionar ou remover um item!&#128230;</p>
					<input
						className="entradas"
						type="text"
						placeholder="Nome do Item"
					/>
					<input
						className="entradas"
						type="number"
						placeholder="Quantidade"
					/>
					<input
						className="entradas"
						type="number"
						placeholder="Preço R$"
					/>
					<div className = "botoes">
						<button className="botao">ADICIONAR</button>
						<button className="botao">EXCLUIR</button>
					</div>
					
				</section>
				<section id="estoque">
                <div id="comport-table">
                    <table className="saida-dados container">
                        <th>ID</th>
                        <th colspan="2">NOME</th>
                        <th>DESCRIÇÃO</th>
                        <th>QUANTIDADE (UNIDADE)</th>
                        <th>PREÇO (R$)</th>
                        <th>AÇÕES</th>
                        <tbody id="resultados">
						{
							itemsList.map(x => {

								return <tr>
									<td>{x.id}</td>
									<td>{x.nome}</td>
									<td>{x.descricao}</td>
									<td>{x.quantidade}</td>
									<td>{x.preco}</td>
									<td>{x.nomeCategoria}</td>
									<td>
										<button className="botao-tabela">
											EDITAR
										</button>

										<button className="botao-tabela">
											EXCLUIR
										</button>
									</td>
									<td>{x.nomeCategoria}</td>

								</tr>
							})
						}

						</tbody>
                    </table>
                </div>
            </section>
			</main>
			<footer className="rodape texto-centro">
				COPYRIGHT &copy; 2021 | JAQUELINE
			</footer>
		</div>
	);
}

export default App;
