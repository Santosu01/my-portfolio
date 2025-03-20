import { Controller, Get } from "@nestjs/common";
import { Tecnologia } from "@core";
import { TecnologiaProvider } from "./tecnologia.provider";

@Controller("tecnologias")
export class TecnologiaController {
	constructor(private readonly repository: TecnologiaProvider) {}

	@Get()
	async obterTodas(): Promise<Tecnologia[]> {
		return this.repository.obterTodos();
	}

	@Get("destaques")
	async obterDestaques(): Promise<Tecnologia[]> {
		return this.repository.obterDestaques();
	}
}
