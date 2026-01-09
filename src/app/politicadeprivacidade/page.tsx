import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

export default function PoliticaDePrivacidade() {
  const dataAtual = format(new Date(), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-neutral-800 font-light leading-relaxed">
      <h1 className="text-3xl font-semibold mb-4 mt-8 md:mt-20">Política de Privacidade</h1>
      <p className="text-sm text-neutral-500 mb-8">Atualizado em {dataAtual}</p>

      <p className="mb-6">
        Na Gaditas Engenharia, prezamos pela sua privacidade e pela segurança das suas informações.
        Esta política tem como objetivo esclarecer como coletamos, usamos e protegemos os dados
        fornecidos por você ao utilizar nosso site.
      </p>

      <h2 className="text-xl font-medium mt-8 mb-2">1. Coleta de dados</h2>
      <div className="mb-6">
        <p>Coletamos apenas as informações necessárias para viabilizar seu atendimento. Isso pode incluir:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Nome</li>
          <li>Telefone</li>
          <li>E-mail</li>
          <li>Informações sobre seu projeto (caso preenchidas no formulário de contato)</li>
        </ul>
        <p className="mt-2">
          Esses dados são fornecidos de forma voluntária por você ao preencher formulários neste site.
        </p>
      </div>

      <h2 className="text-xl font-medium mt-8 mb-2">2. Uso das informações</h2>
      <div className="mb-6">
        <p>As informações coletadas são utilizadas exclusivamente para:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Responder suas solicitações e dúvidas;</li>
          <li>Elaborar orçamentos;</li>
          <li>Entrar em contato com você sobre serviços solicitados;</li>
          <li>Melhorar sua experiência no site.</li>
        </ul>
        <p className="mt-2">Nunca compartilhamos seus dados com terceiros.</p>
      </div>

      <h2 className="text-xl font-medium mt-8 mb-2">3. Armazenamento e segurança</h2>
      <p className="mb-6">
        Suas informações são armazenadas em ambiente seguro e com acesso restrito. Adotamos boas
        práticas de segurança para evitar acessos não autorizados, vazamentos ou uso indevido.
      </p>

      <h2 className="text-xl font-medium mt-8 mb-2">4. Cookies</h2>
      <p className="mb-6">
        Este site pode utilizar cookies para melhorar sua navegação e experiência de uso. Você pode
        desativá-los nas configurações do seu navegador, se preferir.
      </p>

      <h2 className="text-xl font-medium mt-8 mb-2">5. Seus direitos</h2>
      <div className="mb-6">
        <p>Você pode, a qualquer momento, solicitar:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Acesso aos dados pessoais que temos sobre você;</li>
          <li>Correção de informações;</li>
          <li>Exclusão de seus dados do nosso sistema.</li>
        </ul>
        <p className="mt-2">
          Para isso, basta entrar em contato através do e-mail:{' '}
          <strong>contato@gaditasengenharia.com.br</strong>
        </p>
      </div>

      <h2 className="text-xl font-medium mt-8 mb-2">6. Alterações nesta política</h2>
      <p className="mb-6">
        A Gaditas Engenharia pode atualizar esta Política de Privacidade sempre que necessário. A versão
        mais recente estará sempre disponível nesta página.
      </p>

      <p>
        Em caso de dúvidas, entre em contato conosco. <br />
        Estamos à disposição para esclarecer qualquer ponto.
      </p>
    </main>
  )
}
