function DocHeader({ payment }) {
  return (
    <header className="w-full border-2 border-black">
      {/* Logo e título */}
      <div className="grid grid-cols-[32%_68%]">
        <div className="flex flex-col items-center justify-center border-r-2 border-black p-2">
          {/* Logo da empresa */}
          <div className="h-12 w-36">{/* Logo */}</div>
          <div className="flex w-full justify-around text-[9px] font-bold">
            <span>#N/D</span>
            <span>#N/D</span>
          </div>
        </div>

        <div className="flex items-center justify-center p-3 text-center">
          <h1 className="text-base font-bold uppercase">
            Solicitação de Pagamento
          </h1>
        </div>
      </div>

      {/* Dados da solicitação e documentos */}
      <div className="grid grid-cols-[62%_38%] border-t-2 border-black">
        <section className="flex flex-col justify-between">
          <div className="grid grid-cols-[28%_72%] items-center">
            <span className="bg-primary px-2 py-1 text-center text-xs font-bold text-white">
              SETOR:
            </span>
            <div className="min-h-7 border-b border-black px-2">
              {/* Setor */}
            </div>
          </div>

          <div className="grid grid-cols-[28%_72%] items-center">
            <span className="bg-primary px-2 py-1 text-center text-xs font-bold text-white">
              SOLICITANTE:
            </span>
            <div className="min-h-7 border-b border-black px-2">
              {/* Solicitante */}
            </div>
          </div>

          <div className="grid grid-cols-[28%_72%] items-center">
            <span className="bg-primary px-2 py-1 text-center text-[10px] font-bold text-white">
              DATA DA SOLICITAÇÃO:
            </span>
            <div className="min-h-7 border-b border-black px-2">
              {/* Data da solicitação */}
            </div>
          </div>

          <div className="grid grid-cols-[28%_72%] items-center">
            <span className="bg-primary px-2 py-1 text-center text-xs font-bold text-white">
              RAMAL:
            </span>
            <div className="min-h-7 px-2">{/* Ramal */}</div>
          </div>
        </section>

        <section className="border-l-2 border-black">
          <h2 className="bg-primary border-b border-black text-center text-[10px] font-bold text-white">
            Documentos Anexados
          </h2>

          <div className="space-y-0.5 p-1 text-[10px]">
            <div>{/* Nota Fiscal ou Recibo */}</div>
            <div>{/* Orçamento Aprovado */}</div>
            <div>{/* Ordem de Pagamento/Rescisões/Indenizações */}</div>
            <div>{/* Contrato Assinado/Pagamento Mensal */}</div>
            <div>{/* Acordo Judicial */}</div>
            <div>{/* Água/Luz/Telefone/Celular/Internet/Tributos */}</div>
            <div>{/* Outros */}</div>
          </div>
        </section>
      </div>
    </header>
  );
}

function DocContent({ payment }) {
  return (
    <main className="w-full border-x-2 border-black">
      {/* Favorecido */}
      <section>
        <h2 className="border-x-0 border-y-2 border-black bg-primary py-1 text-center text-sm font-bold text-white">
          FAVORECIDO
        </h2>

        <div className="min-h-8 border-b-2 border-black">
          {/* Nome do favorecido */}
        </div>
      </section>

      {/* CNPJ/CPF */}
      <section className="grid grid-cols-[18%_82%]">
        <h2 className="flex items-center justify-center border-r-2 border-b-2 border-black bg-primary px-2 py-2 text-xs font-bold text-white">
          CNPJ/CPF:
        </h2>
        <div className="min-h-8 border-b-2 border-black">
          {/* Documento fiscal */}
        </div>
      </section>

      {/* Valor e data limite */}
      <section className="grid grid-cols-2">
        <div className="border-r-2 border-black">
          <h2 className="border-b-2 border-black bg-primary py-1 text-center text-xs font-bold text-white">
            VALOR (R$)
          </h2>
          <div className="min-h-8 border-b-2 border-black">{/* Valor */}</div>
        </div>

        <div>
          <h2 className="border-b-2 border-black bg-primary py-1 text-center text-xs font-bold text-white">
            DATA LIMITE PRA PGTO
          </h2>
          <div className="min-h-8 border-b-2 border-black">
            {/* Data limite */}
          </div>
        </div>
      </section>

      {/* Observações */}
      <section>
        <h2 className="border-b-2 border-black bg-primary py-1 text-center text-xs font-bold text-white">
          OBSERVAÇÕES/FINALIDADE/JUSTIFICATIVA DO PAGAMENTO
        </h2>

        <div className="min-h-20 border-b-2 border-black p-2">
          {/* Observações, finalidade e justificativa */}
        </div>
      </section>

      {/* Forma de pagamento */}
      <section>
        <h2 className="border-b-2 border-black bg-primary py-1 text-center text-sm font-bold text-white">
          FORMA DE PAGAMENTO
        </h2>

        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-center gap-1 p-2 text-[10px] font-bold">
            <div>{/* Depósito on-line */}</div>
            <div>{/* Cheque */}</div>
            <div>{/* Caixa */}</div>
            <div>{/* Boleto */}</div>
          </div>

          <div className="flex flex-col justify-center gap-1 p-2 text-[10px] font-bold">
            <div className="flex justify-around">
              {/* Conta corrente e conta poupança */}
            </div>

            <div>{/* Número do banco */}</div>
            <div>{/* Nome do banco */}</div>
            <div>{/* Agência e dígito */}</div>
            <div>{/* Conta corrente e dígito */}</div>
          </div>
        </div>
      </section>

      {/* Assinaturas da solicitação */}
      <section className="grid grid-cols-2 border-t-2 border-black">
        <div className="border-r-2 border-black">
          <h2 className="bg-primary py-1 text-center text-xs font-bold text-white">
            SOLICITANTE
          </h2>
          <p className="bg-primary pb-1 text-center text-[9px] italic text-white">
            Carimbo e Assinatura
          </p>
          <div className="min-h-10" />
        </div>

        <div>
          <h2 className="bg-primary py-1 text-center text-xs font-bold text-white">
            LÍDER DO SETOR SOLICITANTE
          </h2>
          <p className="bg-primary pb-1 text-center text-[9px] italic text-white">
            Carimbo e Assinatura
          </p>
          <div className="min-h-10" />
        </div>
      </section>
    </main>
  );
}

function DocFooter({ payment }) {
  return (
    <footer className="w-full border-x-2 border-b-2 border-black">
      {/* Conferência */}
      <section className="mt-10">
        <h2 className="border-y-2 border-black text-center text-xs font-bold">
          CONFERÊNCIA
        </h2>

        <div className="grid grid-cols-2">
          <div className="border-r-2 border-b-2 border-black">
            <h3 className="bg-primary py-1 text-center text-xs font-bold text-white">
              SETOR FINANCEIRO
            </h3>
            <div className="min-h-12" />
          </div>

          <div className="border-b-2 border-black">
            <h3 className="bg-primary py-1 text-center text-xs font-bold text-white">
              SUPERVISÃO FINANCEIRO
            </h3>
            <div className="min-h-12" />
          </div>
        </div>
      </section>

      {/* Gerência executiva */}
      <section className="mx-auto w-[35%]">
        <h2 className="border-x-2 border-t-2 border-black bg-primary py-1 text-center text-xs font-bold text-white">
          GERÊNCIA EXECUTIVA
        </h2>
        <div className="min-h-12 border-x-2 border-b-2 border-black" />
      </section>

      {/* Aprovação */}
      <section className="mt-10">
        <h2 className="border-2 border-black text-center text-xs font-bold">
          APROVAÇÃO
        </h2>

        <div className="grid grid-cols-3">
          <div className="border-r-2 border-b-2 border-black">
            <h3 className="bg-primary py-1 text-center text-[10px] font-bold text-white">
              DIRETOR PRESIDENTE
            </h3>
            <div className="min-h-12" />
          </div>

          <div className="border-r-2 border-b-2 border-black">
            <h3 className="bg-primary py-1 text-center text-[10px] font-bold text-white">
              DIRETOR VICE-PRESIDENTE
            </h3>
            <div className="min-h-12" />
          </div>

          <div className="border-b-2 border-black">
            <h3 className="bg-primary py-1 text-center text-[10px] font-bold text-white">
              DIRETOR SUPERINTENDENTE
            </h3>
            <div className="min-h-12" />
          </div>
        </div>
      </section>
    </footer>
  );
}

function PaymentDoc({ payment }) {
  return (
    <article className="mx-auto flex min-h-[297mm] w-[210mm] flex-col bg-white p-[4mm] text-black">
      <DocHeader payment={payment} />
      <DocContent payment={payment} />
      <DocFooter payment={payment} />
    </article>
  );
}

export default PaymentDoc;
