import { Controller, Get, Param } from "@nestjs/common";
import { ProjetoProvider } from "./projeto.provider";
import { Projeto } from "@core";

@Controller("projetos")
export class ProjetoController {
	constructor(private readonly repository: ProjetoProvider) {}

	@Get()
	async obterTodas(): Promise<Projeto[]> {
		return this.repository.obterTodos();
	}

	@Get(":id")
	async obterPorId(@Param("id") id: string): Promise<Projeto | null> {
		return this.repository.obterPorId(Number(id));
	}
}
