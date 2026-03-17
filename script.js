// JavaScript code for the services payment tracker app

const paymentTracker = {
    payments: [],

    addPayment: function(payment) {
        this.payments.push(payment);
        console.log(`Payment of $${payment.amount} added.');
    },

    getPayments: function() {
        return this.payments;
    },

    totalPayments: function() {
        return this.payments.reduce((total, payment) => total + payment.amount, 0);
    }
};

// Example use:
// paymentTracker.addPayment({ amount: 100, date: '2023-01-01', description: 'Service A' });
// console.log(paymentTracker.getPayments());