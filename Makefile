REPO=shop
TAG=latest
ENV=prod
DEPLOYMENT=shop
CONTAINER=shop
LIMIT=20
PROJECT_NAME=ceremonial-rush-190313
ZONE=eu.gcr.io


all: docker push

docker:
	docker build -t ${ZONE}/${PROJECT_NAME}/$(REPO):$(TAG) .

push:
	gcloud docker -- push ${ZONE}/${PROJECT_NAME}/$(REPO):$(TAG)

run:
	docker run --rm -p 8000:8000 ${ZONE}/${PROJECT_NAME}/$(REPO):$(TAG)

upgrade:
	kubectl exec $(POD) -c $(CONTAINER) -it -- flask db upgrade

shell:
	kubectl exec $(POD) -c $(CONTAINER) -it -- bash

.PHONY: docker push undo upgrade shell all
