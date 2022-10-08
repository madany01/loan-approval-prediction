'use strict'

const form = document.querySelector('form')
const spinnerCtr = document.querySelector('.spinner-modal-ctr')
const cancelPredictionBtn = document.querySelector('.spinner-ctr .cancel')

const errMsgModal = document.querySelector('.err-msg-modal')
const errMsgEl = errMsgModal.querySelector('.msg')
const hideErrMsg = errMsgModal.querySelector('.err-msg-modal .close-modal')

const predictionCtr = document.querySelector('.predictions-ctr')
const modelsEls = {
  bayes: predictionCtr.querySelector('.bayes'),
  tree: predictionCtr.querySelector('.tree'),
  logistic: predictionCtr.querySelector('.logistic'),
  svm: predictionCtr.querySelector('.svm'),
  knn: predictionCtr.querySelector('.knn'),
  voting_majority: predictionCtr.querySelector('.majority'),
}

const API = 'https://loan-approval-prediction-api.onrender.com'
let abortController = null

const NUMERIC_FIELDS = [
  'ApplicantIncome',
  'CoapplicantIncome',
  'LoanAmount',
  'Loan_Amount_Term',
]

const errMsg = {
  show(msg) {
    errMsgEl.textContent = msg || errMsgEl.dataset.msg
    errMsgModal.classList.remove('hidden')
  },
  hide() {
    errMsgModal.classList.add('hidden')
  },
}

const spinner = {
  show() {
    spinnerCtr.classList.remove('d-none')
  },
  hide() {
    spinnerCtr.classList.add('d-none')
  },
}

const modelsPredictions = {
  hide() {
    predictionCtr.classList.add('hidden')
  },
  showResults(y) {
    Object.entries(modelsEls).forEach(([modelName, modelEl]) => {
      modelEl.classList.remove('yes', 'no')
      modelEl.classList.add(y[modelName].toLowerCase())
    })

    predictionCtr.classList.remove('hidden')
  },
}

async function fetchPrediction(x) {
  const resp = await fetch(API, {
    method: 'POST',
    signal: abortController.signal,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(x),
  })

  return resp.json()
}

hideErrMsg.addEventListener('click', () => errMsg.hide())

cancelPredictionBtn.addEventListener('click', () => {
  if (!abortController) return

  abortController.abort()
  abortController = null
})

form.addEventListener('submit', async ev => {
  ev.preventDefault()

  const x = Object.fromEntries([...new FormData(form)])
  NUMERIC_FIELDS.forEach(attr => (x[attr] = Number(x[attr])))

  modelsPredictions.hide()
  errMsg.hide()
  spinner.show()

  if (!abortController) abortController = new AbortController()

  let predictions = null

  try {
    predictions = await fetchPrediction(x)
  } catch (err) {
    console.log(err)

    if (err.name !== 'AbortError') errMsg.show()

    spinner.hide()
    form.scrollIntoView()

    return
  }

  spinner.hide()
  modelsPredictions.showResults(predictions)
  predictionCtr.scrollIntoView()
})

// eslint-disable-next-line no-unused-vars
function populate() {
  document.querySelectorAll('input[type="number"]').forEach((inp, i) => {
    // eslint-disable-next-line no-param-reassign
    inp.value = i + 1
  })
  const names = new Set()
  document.querySelectorAll(`input[type="radio"]`).forEach(inp => {
    if (names.has(inp.name)) return
    names.add(inp.name)
    // eslint-disable-next-line no-param-reassign
    inp.checked = true
  })
}

// populate()
