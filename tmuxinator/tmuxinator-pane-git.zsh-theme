# https://github.com/blinks zsh theme

ZSH_THEME_GIT_PROMPT_PREFIX=" [%{%B%F{blue}%}"
ZSH_THEME_GIT_PROMPT_SUFFIX="%{%f%k%b%K{${bkg}}%B%F{green}%}]"
ZSH_THEME_GIT_PROMPT_DIRTY=" %{%F{red}%}*%{%f%k%b%}"
ZSH_THEME_GIT_PROMPT_CLEAN=""

PROMPT='%{%b%F{yellow}%K{${bkg}}%}$(basename "$PWD")%{%B%F{green}%}$(git_prompt_info)%E%{%f%k%b%}
%{%K{${bkg}}%}(Git)$%{%f%k%b%} '

RPROMPT=' '
