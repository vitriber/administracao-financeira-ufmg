const N_MES_NO_ANO = 12;
const N_DIAS_NO_MES = 22;
const N_DIAS_NO_ANO = 252;

function calculaJurosDeDiaPraMes(jurosAoDia) {
  return ((1 + jurosAoDia / 100) ** N_DIAS_NO_MES - 1) * 100;
}

function calculaJurosDeDiaPraAno(jurosAoDia) {
  return ((1 + jurosAoDia / 100) ** N_DIAS_NO_ANO - 1) * 100;
}

function calculaJurosDeMesPraDia(jurosAoMes) {
  return ((1 + jurosAoMes / 100) ** (1 / N_DIAS_NO_MES) - 1) * 100;
}

function calculaJurosDeMesPraAno(jurosAoMes) {
  return ((1 + jurosAoMes / 100) ** N_MES_NO_ANO - 1) * 100;
}

function calculaJurosDeAnoPraDia(jurosAoAno) {
  return ((1 + jurosAoAno / 100) ** (1 / N_DIAS_NO_ANO) - 1) * 100;
}

function calculaJurosDeAnoPraMes(jurosAoAno) {
  return ((1 + jurosAoAno / 100) ** (1 / N_MES_NO_ANO) - 1) * 100;
}

export default {
  calculaJurosDeDiaPraMes,
  calculaJurosDeDiaPraAno,
  calculaJurosDeMesPraDia,
  calculaJurosDeMesPraAno,
  calculaJurosDeAnoPraDia,
  calculaJurosDeAnoPraMes
};
