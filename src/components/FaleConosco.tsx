'use client';
import { Resolver, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';
import { celularMask, cepMask } from 'masks-br';
import { useState } from 'react';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Importa o CSS do toast
import { Spinner } from '@radix-ui/themes';

export type FormContact = {
  nome: string;
  celular: string;
  email: string;
  cep: string;
  cidade: string;
  estado: string;
  bairro: string;
  mensagem: string;
};

const contatoSchema = yup.object().shape({
  nome: yup.string().required('O campo Nome é obrigatório.'),
  celular: yup.string().required('O campo celular é obrigatório.'),
  cep: yup.string().required('O campo CEP é obrigatório.'),
  cidade: yup.string().required('O campo Cidade é obrigatório.'),
  estado: yup.string().required('O campo Estado é obrigatório.'),
  bairro: yup.string().required('O campo Bairro é obrigatório.'),
  mensagem: yup.string().required('O campo Mensagem é obrigatório.'),
  email: yup
    .string()
    .email('Forneça um email válido.')
    .required('O campo E-mail é obrigatório.'),
});

export function FaleConosco() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormContact>({
    resolver: yupResolver(contatoSchema) as Resolver<FormContact>,
  });

  const [loadingCep, setLoadingCep] = useState(false);
  const [loadButton, setLoadButton] = useState(false);

  const onSubmit = async (data: FormContact) => {
    setLoadButton(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Formulário enviado com sucesso!', {
          position: 'bottom-right',
        });
      } else {
        toast.error('Houve um erro ao enviar o formulário.', {
          position: 'bottom-right',
        });
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      toast.error('Erro ao enviar o formulário.', {
        position: 'bottom-right',
      });
    } finally {
      setLoadButton(false);
    }
  };

  // Função que faz a busca do CEP
  const fetchAddressByCep = async (cep: string) => {
    if (cep.length < 9) {
      setValue('cidade', '');
      setValue('bairro', '');
      setValue('estado', '');
      return;
    }

    setLoadingCep(true);
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        alert('CEP não encontrado.');
      } else {
        // Atualiza os valores dos campos com os dados retornados
        setValue('cidade', data.localidade);
        setValue('estado', data.uf);
        setValue('bairro', data.bairro || '');
      }
    } catch (error) {
      console.error('Erro ao buscar o CEP:', error);
      alert('Erro ao buscar o CEP.');
    } finally {
      setLoadingCep(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <section className="mt-8 lg:mt-12 w-full">
        <div className="container mx-auto px-4 lg:px-12 py-12 flex-col flex lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <h2 className="text-5xl lg:text-7xl 2xl:text-8xl font-bold mb-4 uppercase font-bebas tracking-wide">
              Seja Um Franqueado
              <span className="text-blue-200 w-full block">
                blocok original
              </span>
            </h2>
            <p className="text-md lg:text-xl font-semibold text-justify leading-normal w-full lg:w-[80%]">
              Entre para a nossa lista de espera e se candidate a uma vaga de
              franqueado
            </p>
          </div>
          <div className="w-full flex lg:w-1/2 gap-6">
            <div className="w-full">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label
                    htmlFor="nome"
                    className="text-sm text-black font-bold"
                  >
                    Nome*
                  </label>
                  <input
                    {...register('nome')}
                    className="border border-slate-500 text-sm rounded p-2 w-full"
                  />
                  {errors.nome && (
                    <p className="text-red-600 text-xs font-bold">
                      {errors.nome.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col lg:flex-row gap-4 w-full">
                  <div className="w-full">
                    <label
                      htmlFor="celular"
                      className="text-sm text-black font-bold"
                    >
                      Celular*
                    </label>
                    <input
                      {...register('celular')}
                      className="border border-slate-500 text-sm rounded p-2 w-full"
                      onChange={(e) =>
                        setValue('celular', celularMask(e.target.value))
                      }
                    />
                    {errors.celular && (
                      <p className="text-red-600 text-xs font-bold">
                        {errors.celular.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="email"
                      className="text-sm text-black font-bold"
                    >
                      Email*
                    </label>
                    <input
                      {...register('email')}
                      className="border border-slate-500 text-sm rounded p-2 w-full"
                    />
                    {errors.email && (
                      <p className="text-red-600 text-xs font-bold">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4 w-full">
                  <div className="w-full">
                    <label
                      htmlFor="cep"
                      className="text-sm text-black font-bold"
                    >
                      CEP*
                    </label>
                    <input
                      {...register('cep')}
                      className="border border-slate-500 text-sm rounded p-2 w-full"
                      maxLength={9}
                      onChange={(e) => {
                        setValue('cep', cepMask(e.target.value));
                        fetchAddressByCep(e.target.value);
                      }}
                    />
                    {loadingCep && <p>Carregando endereço...</p>}
                    {errors.cep && (
                      <p className="text-red-600 text-xs font-bold">
                        {errors.cep.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="cidade"
                      className="text-sm text-black font-bold"
                    >
                      Cidade*
                    </label>
                    <input
                      {...register('cidade')}
                      className="border border-slate-500 text-sm rounded p-2 w-full bg-gray-200 cursor-not-allowed"
                      readOnly
                    />
                    {errors.cidade && (
                      <p className="text-red-600 text-xs font-bold">
                        {errors.cidade.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4 w-full">
                  <div className="w-full">
                    <label
                      htmlFor="bairro"
                      className="text-sm text-black font-bold"
                    >
                      Bairro*
                    </label>
                    <input
                      {...register('bairro')}
                      className="border border-slate-500 text-sm rounded p-2 w-full"
                    />
                    {errors.bairro && (
                      <p className="text-red-600 text-xs font-bold">
                        {errors.bairro.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="estado"
                      className="text-sm text-black font-bold"
                    >
                      Estado*
                    </label>
                    <input
                      {...register('estado')}
                      className="border border-slate-500 text-sm rounded p-2 w-full bg-gray-200 cursor-not-allowed"
                      readOnly
                    />
                    {errors.estado && (
                      <p className="text-red-600 text-xs font-bold">
                        {errors.estado.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="mensagem"
                    className="text-sm text-black font-bold"
                  >
                    Mensagem*
                  </label>
                  <textarea
                    {...register('mensagem')}
                    className="border border-slate-500 text-sm rounded p-2 w-full"
                  />
                  {errors.mensagem && (
                    <p className="text-red-600 text-xs font-bold">
                      {errors.mensagem.message}
                    </p>
                  )}
                </div>
                <div className="w-full flex justify-start items-center">
                  <button
                    type="submit"
                    className="bg-blue-200 text-white p-2 rounded w-full hover:bg-blue-400 flex justify-center items-center text-center cursor-pointer"
                    disabled={loadButton}
                  >
                    {loadButton ? (
                      <div className="flex justify-center items-center gap-2">
                        <Spinner className="w-5 h-5" />
                        <span>Enviando...</span>
                      </div>
                    ) : (
                      'Enviar'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
