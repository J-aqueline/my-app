import React, { useEffect, useState } from "react";
import * as Service from'./service';
import "./App.css";

function App() {
	const [itemsList,setItemsList] = useState([])
	const [categoriaList,setCategoriaList] = useState([])
	const [itemNome,setItemNome] = useState("")
	const [itemPreco,setItemPreco] = useState(0)
	const [itemQuantidade,setItemQuantidade] = useState(0)
	const [itemDescricao,setItemDescricao] = useState("")
	const [itemIdCategoria,setItemIdCategoria] = useState(-1)


	const loadAllItems = async () => {
		const list = await Service.getAllItem();
		setItemsList(list);
	};
	const loadAllCategorias = async () => {
		const list = await Service.getAllCategoria();
		setCategoriaList(list);
	}
	useEffect(() => {
	
		loadAllItems();
		loadAllCategorias();
	}, []);

	const addItem = async () => {
		await Service.postItem({
			"nome": itemNome,
			"descricao": itemDescricao,
			"quantidade": itemQuantidade,
			"preco": itemPreco,
			"idCategoria": itemIdCategoria
		});
		await loadAllItems();
	}

	const excluirItem = async (id) => {
		await Service.postItem({
			"nome": itemNome,
			"descricao": itemDescricao,
			"quantidade": itemQuantidade,
			"preco": itemPreco,
			"idCategoria": itemIdCategoria
		});
		await loadAllItems();
	}
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
						onChange={((e)=> setItemNome(e.target.value))}
					/>
					<input
						className="entradas"
						type="number"
						placeholder="Quantidade"
						onChange={((e)=> setItemQuantidade(e.target.value))}
					/>
					<input
						className="entradas"
						type="number"
						placeholder="Preço R$"
						onChange={((e)=> setItemPreco(e.target.value))}

					/>
					<input
						className="entradas"
						type="text"
						placeholder="Descrição"
						onChange={((e)=> setItemDescricao(e.target.value))}
						
					/>

					<select className="entradas" onChange={(e)=> setItemIdCategoria(e.target.options[e.target.selectedIndex].value)}>
						<option value="-1">Selecionar Categoria</option>
						{
							categoriaList.map(categoria => {
								return <option value={categoria.id}>{categoria.nome}</option>
							})
						}
						
					</select>
					<div className = "botoes">
						<button className="botao" onClick={(() => addItem())}>ADICIONAR</button>
						<button className="botao">EXCLUIR</button>
					</div>
					
				</section>
				<section id="estoque">
                <div id="comport-table">
                    <table className="saida-dados container">
                        <th>ID</th>
                        <th>NOME</th>
                        <th>DESCRIÇÃO</th>
                        <th>QUANTIDADE (UNIDADE)</th>
                        <th>PREÇO (R$)</th>
                        <th>AÇÕES</th>
                        <tbody id="resultados">
						{
							itemsList.map(x => {

								return <tr key={x.id}>
									<td>{x.id}</td>
									<td>{x.nome}</td>
									<td>{x.descricao}</td>
									<td>{x.quantidade}</td>
									<td>{x.preco}</td>
									<td>{x.nomeCategoria}</td>
									<td>
										<button className="botao-tabela" onClick={(() => excluirItem())}>
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
