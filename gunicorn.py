import os

bind = '0.0.0.0:8000'
chdir = '/app'
forwarded_allow_ips = '*'

workers = os.getenv('GUNICORN_WORKERS', 4)
threads = os.getenv('GUNICORN_THREADS', 1)
timeout = os.getenv('GUNICORN_TIMEOUT', 60)
max_requests = 10000  # Reload workers to prevent memory leaks
