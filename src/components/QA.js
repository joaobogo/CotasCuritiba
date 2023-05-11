import React, { useState } from "react";
import QAcontainer from "./styles/qastyles/QA.styles";

function QA() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show8, setShow8] = useState(false);
  const [show9, setShow9] = useState(false);

  return (
    <QAcontainer>
      <h2 id="qa">Fique por dentro do assunto</h2>
      <div className="body">
        <div className="pparent">
        <p className="mainp" onClick={() => setShow9(!show9)}>
          Qual é a diferença entre financiamente e consórcio?
        </p>
        {show9 && (
          <p className="secondaryp">
            O consórcio além de ser uma modalidade de compra, é também uma forma
            de poupança e investimento para o futuro. Para aqueles que têm o
            desejo de construir um patrimônio sólido e uma aposentadoria, ou
            seja, não estão com muita pressa em adquirir o bem, o consórcio é
            uma excelente escolha. Adquirindo uma cota de consórcio através de
            uma Administradora de consórcios autorizada pelo Banco Central, o
            que torna o negócio absolutamente idôneo e seguro, você se torna um
            consorciado e passa a investir um valor mensal durante um prazo
            definido em contrato, conforme o tipo de bem e seu valor monetário.
            Através dos lances e sorteios mensais, o consorciado tem a chance de
            ser contemplado e receber o valor total da carta de crédito à vista
            e então adquirir o bem, tendo ainda a possibilidade de negociar bons
            descontos já que comprará o bem à vista e assim, já usufruindo do
            bem, continua a pagar as mensalidades do consórcio até o término do
            grupo. Esse processo é exclusivo do consórcio, fazendo dele uma
            modalidade de compra muito diferente do financiamento.
          </p>
        )}
</div>
<div className="pparent">
        <p className="mainp" onClick={() => setShow8(!show8)}>
          Consórcio é seguro?
        </p>
        {show8 && (
          <p className="secondaryp">
            As administradoras de consórcio são regulamentadas pelo Banco
            Central do Brasil e precisam cumprir diversas normas e exigências
            para oferecer esse serviço. Além disso, elas são fiscalizadas
            constantemente pela autoridade monetária, garantindo que estejam
            operando de acordo com as normas e em condições financeiras
            saudáveis. Isso traz mais segurança para os consumidores, que podem
            confiar na seriedade e solidez das administradoras.
          </p>
        )}
</div>
<div className="pparent">
        <p className="mainp" onClick={() => setShow(!show)}>
          É preciso dar entrada para adquirir consorcio?
        </p>
        {show && (
          <p className="secondaryp">
            Não! A escolha pelo consórcio acontece, geralmente, pelo fato de o
            interessado não possuir um valor em mãos para dar de entrada. Após
            ser aprovado pela administradora, já inicia o pagamento das parcelas
            combinadas.
          </p>
        )}
</div>
<div className="pparent">
        <p className="mainp" onClick={() => setShow2(!show2)}>
          O que é a carta de credito?
        </p>
        {show2 && (
          <p className="secondaryp">
            A carta de crédito é um documento com fins financeiros que serve
            para que o consorciado contemplado consiga contratar algum serviço
            ou comprar algum bem conforme o valor previamente combinado pelo
            consórcio, negociando à vista. Os valores podem variar conforme o
            tipo de bem a ser adquirido, valor do bem e prazo de pagamento da
            cota de consórcio.
          </p>
        )}
</div>
<div className="pparent">
        <p className="mainp" onClick={() => setShow3(!show3)}>
          Como aquirir carta de credito?
        </p>
        {show3 && (
          <p className="secondaryp">
            Atualmente conseguir um consórcio contemplado pode ser mais fácil
            comprando cotas que já foram contempladas ou comprando cotas em
            grupos em andamento onde os lances podem ser reduzidos e otimizados.
            Sim, você pode assumir a titularidade de cartas de crédito de outras
            pessoas que já foram contempladas a qualquer momento, precisando
            apenas comprovar 3 vezes o valor da parcela para se tornar o dono
            daquela carta de crédito. Isto é possível pois, muitos consorciados,
            ao longo do tempo, preferem vender suas cotas para realizar lucro
            com a comercialização. É onde entra empresas como a Consorciocred,
            que compram essas cartas de crédito contempladas e consórcios em
            andamento para revender depois a quem queira faturar uma casa ou um
            carro sem ter que esperar a contemplação. Uma forma muito eficaz de
            ajudar as pessoas a realizarem seu sonho de forma muito mais rápida.
          </p>
        )}
        </div>
<div className="pparent">
        <p className="mainp" onClick={() => setShow5(!show5)}>
          Existe analise de crédito para um consórcio?
        </p>
        {show5 && (
          <p className="secondaryp">
            A análise de crédito no consórcio tem como objetivo analisar se o
            consorciado que irá adquirir o bem possui ou não condições
            financeiras para assimilar as parcelas restantes daquela cota dentro
            de seu orçamento. Depois que o consórcio é contemplado, a
            administradora faz uma análise de crédito. Ela faz isso para saber
            se você ainda possui condições para continuar se comprometendo com o
            pagamento das parcelas mensais mesmo após o faturamento do bem. Isto
            é, se você foi contemplado, ainda sobram as parcelas restantes para
            pagar e a Administradora precisa saber se você tem condições de
            continuar assimilado elas ou não. Ela atua dessa forma para garantir
            a saúde financeira do grupo e evitar que consorciados que ainda não
            foram contemplados não acabem prejudicados pela inadimplência
            daqueles que já foram. O consórcio funciona como um
            autofinanciamento em grupo, no qual as pessoas se ajudam para
            adquirir o bem de interesse. Assim, manter a saúde financeira do
            grupo é de extrema importância para avaliar que todos que tiverem
            seus faturamentos realizados possam cumprir as obrigações
            estipuladas em contrato, assegurando que todos consigam faturar seus
            bens desejados. A dica de ouro é, foi contemplado? Liga na
            administradora, confirma essa contemplação e pergunta quais serão os
            próximos passos a partir de então. Normalmente eles solicitam uma
            série de documentos para você estar enviando.
          </p>
        )}
</div>
        <div className="buttoncontainer">
          <a href="https://wa.me/554192063723">
            Ainda tem dúvida? Fale conosco agora mesmo.
          </a>
        </div>
      </div>
    </QAcontainer>
  );
}

export default QA;
