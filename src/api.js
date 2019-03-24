export const FAKE_USER = {
    firstName: 'Isha',
    lastName: 'Soni',
    username: 'isha',
    avatar: 'https://0.gravatar.com/avatar/9cf60874a20a8097015e0e1695d750e5?s=60'
};

export function login(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'isha' && password === 'secret') {
                resolve(FAKE_USER);
            } else {
                reject({message: 'Invalid username or password'});
            }
        }, 300);
    });
}


export const FAKE_EMAILS = [
    {
        id: 0,
        subject: 'Hey Isha',
        body: 'Yo, just wanted to say hey.'
    },
    {
        id: 1,
        subject: '12 Factor',
        body: 'Look at this.'
    },
    {
        id: 2,
        subject: 'AI testing vs Express',
        body: 'Lets get together and compare two e2e framweworkd'
    }
];

// Generate a preview
FAKE_EMAILS.forEach(
    email => (email.preview = email.body.substr(0, 46))
);

export function fetchEmails() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(FAKE_EMAILS);
        }, 300);
    });
}