import http from 'k6/http';

export const options = {
    stages: [
        { duration: '30s', target: 1000 }
    ]
};

export default function () {
  http.get('http://localhost:8000/api/shoedata');
};