##
## Makefile for Snake
##

NAME	= snake

PORT	= 8000

all: start

start:
	@echo "Lancement du serveur local sur http://localhost:$(PORT)"
	@npx http-server -p $(PORT)

clean:
	@echo "Pas de fichiers temporaires à nettoyer."

fclean: clean

re: fclean all
