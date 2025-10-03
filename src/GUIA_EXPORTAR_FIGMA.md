# 📋 Guia: Como Exportar para o Figma Design

## Método 1: Usar Plugin HTML to Figma (Recomendado)

### Passo 1: Preparar o Aplicativo
1. Execute o aplicativo localmente
2. Abra no navegador (geralmente `http://localhost:3000`)
3. Copie a URL completa

### Passo 2: Instalar o Plugin no Figma
1. Abra o Figma Desktop ou Web
2. Crie um novo arquivo ou abra um existente
3. Clique em **Plugins** → **Find more plugins** (ou pressione `Ctrl/Cmd + /`)
4. Procure por: **"HTML to Figma"** ou **"Builder.io"**
5. Clique em **Install** (ou **Run** se já instalado)

### Passo 3: Importar para o Figma
1. Com o plugin aberto, cole a URL do seu app
2. Ou copie o código HTML de uma tela específica
3. Clique em **Import**
4. Aguarde a conversão (pode levar alguns segundos)

### Passo 4: Ajustar no Figma
- O plugin irá criar frames com os elementos
- Você precisará ajustar alguns detalhes manualmente
- Reorganize as camadas conforme necessário

---

## Método 2: Recriar Manualmente (Mais Preciso)

### 📐 Especificações de Design

#### **Paleta de Cores Gov.br**
```
Azul Principal:   #1351B4
Amarelo:          #FFD500
Verde:            #168821
Cinza Fundo:      #f8f8f8
Branco:           #ffffff
Cinza Texto:      #717182
Borda:            #e5e5e5
```

#### **Tipografia**
```
Família: Sans-serif (Rawline, Inter ou similar)
Tamanhos:
- H1: 32px / 2xl
- H2: 24px / xl
- H3: 20px / lg
- H4/Body: 16px / base
- Small: 14px / sm
- XSmall: 12px / xs

Pesos:
- Normal: 400
- Medium: 500
- Bold: 600
```

#### **Espaçamento**
```
Sistema: Múltiplos de 4px
- Extra Small: 4px
- Small: 8px
- Medium: 16px
- Large: 24px
- XLarge: 32px
- XXLarge: 48px

Padding interno de componentes: 16px
Margem entre seções: 24px
```

#### **Bordas e Raios**
```
Botões: border-radius: 9999px (pill/redondo completo)
Cards: border-radius: 16px
Inputs: border-radius: 12px
Avatar: border-radius: 50% (circular)
Badges: border-radius: 9999px

Espessura de borda: 1-2px
```

#### **Componentes**

##### **Botões**
```
Primário:
- Altura: 56px
- Padding horizontal: 32px
- Background: #1351B4
- Texto: #ffffff, 16px, weight 500
- Border-radius: 9999px
- Hover: #0c3c8f

Secundário:
- Mesmas medidas
- Background: #168821
- Hover: #0f6218

Outline:
- Border: 2px solid #1351B4
- Background: transparent
- Texto: #1351B4
```

##### **Cards**
```
- Background: #ffffff
- Border: 1px solid #e5e5e5
- Border-radius: 16px
- Padding: 16px
- Shadow: 0 1px 3px rgba(0,0,0,0.1)
```

##### **Inputs**
```
- Altura: 48px
- Padding: 16px
- Background: #ffffff
- Border: 1px solid #e5e5e5
- Border-radius: 12px
- Texto: 16px, #000000
- Placeholder: 16px, #717182
```

##### **Ícones**
```
- Tamanho padrão: 24px
- Tamanho pequeno: 20px
- Tamanho grande: 32px
- Cor ativa: #1351B4
- Cor inativa: #cbd5e0
```

---

### 🎨 Estrutura das Telas

#### **1. Login Screen**
```
Frame: 375 x 812px (iPhone X)

Header:
- Background: #1351B4
- Altura: auto

Logo gov.br:
- Posição: Centralizado
- Texto "gov" em #1351B4
- Texto "." em #FFD500
- Texto "br" em #168821 e #1351B4

Botão Principal:
- Largura: 100% - 64px margin
- "Entrar com gov.br"
- Background: #1351B4
- Border-radius: 9999px
- Altura: 56px
```

#### **2. Home Screen**
```
Frame: 375 x 812px

Header:
- Background: #1351B4
- Padding: 24px
- Texto branco
- Saudação + Nome do usuário

Grid de Problemas:
- 2 colunas
- Gap: 16px
- Cards:
  - Border: 2px solid #e5e5e5
  - Border-radius: 24px
  - Padding: 24px
  - Ícone circular: 56px
  - Cores dos ícones: conforme tipo

Stats Card:
- Background: #f8f8f8
- Border: 1px solid #e5e5e5
- 3 colunas internas
- Cards brancos com bordas
```

#### **3. Register Screen**
```
Frame: 375 x 812px

Formulário:
- Padding: 24px
- Gap entre campos: 20px

Cada campo:
- Label: 14px, cinza escuro
- Input: 48px altura
- Margem inferior: 20px

Upload de Foto:
- Border: 2px dashed #e5e5e5
- Background: #f8f8f8
- Padding: 32px
- Ícone: 56px
```

#### **4. Protocols Screen**
```
Frame: 375 x 812px

Lista de Protocolos:
- Gap: 16px
- Cada card:
  - Border: 2px solid (cor do status)
  - Border-radius: 16px
  - Padding: 16px
  - Status badge: pill, 10px opacity do status

Resumo:
- Background: #f8f8f8
- Dots coloridos: 12px circular
```

#### **5. Map Screen**
```
Frame: 375 x 812px

Mapa:
- Background: #e8edf2
- Grid pattern para simular mapa

Markers:
- Tamanho: 40px circular
- Border: 3px white
- Ícone: MapPin branco
- Pulse animation

Legenda:
- Card flutuante
- Bottom: 16px
- Padding: 16px
- Background: white
- Shadow
```

#### **6. Profile Screen**
```
Frame: 375 x 812px

Avatar:
- Tamanho: 96px
- Circular
- Gradient: #1351B4 to #0c3c8f
- Border: 4px white
- Posição: -48px do header

Cards de Info:
- Background: white
- Border: 1px solid #e5e5e5
- Padding: 16px
- Ícone em círculo: 40px, background #f8f8f8
```

---

### 📱 Navegação Bottom Bar

```
Altura: 64px
Background: #ffffff
Border-top: 1px solid #e5e5e5

Cada item:
- Largura: 25% (4 itens)
- Ícone: 24px
- Label: 12px
- Gap: 4px
- Cor ativa: #1351B4
- Cor inativa: #cbd5e0
```

---

## Método 3: Usar Screenshots

### Passo 1: Capturar Telas
1. Abra o app no navegador
2. Use DevTools (F12) para simular mobile (375x812px)
3. Navegue por todas as telas
4. Capture screenshots de cada uma:
   - Login
   - Home
   - Registro de Ocorrência
   - Lista de Protocolos
   - Mapa
   - Perfil

### Passo 2: Importar no Figma
1. Crie um novo arquivo no Figma
2. Arraste as screenshots para o canvas
3. Use as imagens como referência
4. Recrie os componentes em cima

### Passo 3: Criar Sistema de Design
1. Crie uma página "Design System"
2. Adicione:
   - Paleta de cores
   - Estilos de texto
   - Componentes (botões, cards, inputs)
3. Use auto-layout para componentes responsivos

---

## 🎯 Checklist Final

- [ ] Todas as 6 telas criadas
- [ ] Cores gov.br aplicadas
- [ ] Tipografia configurada
- [ ] Componentes reutilizáveis criados
- [ ] Auto-layout aplicado
- [ ] Navegação bottom conectada
- [ ] Estados (hover, active) configurados
- [ ] Protótipo de navegação criado
- [ ] Responsividade testada

---

## 💡 Dicas Importantes

1. **Use Auto-Layout**: Configure todos os containers com auto-layout do Figma para manter consistência
2. **Componentes**: Transforme elementos repetidos em componentes (botões, cards, inputs)
3. **Variantes**: Crie variantes para estados diferentes (normal, hover, disabled)
4. **Estilos de Texto**: Crie estilos reutilizáveis para tipografia
5. **Cores**: Salve todas as cores gov.br como estilos de cor
6. **Grid**: Configure grid de 8px para alinhamento perfeito
7. **Constraints**: Configure constraints para responsividade

---

## 📚 Recursos Úteis

- Design System Gov.br: https://www.gov.br/ds/
- Figma Community: Procure por "Gov.br" para templates existentes
- Plugin "Content Reel": Para preencher com dados fictícios
- Plugin "Iconify": Para ícones consistentes

---

## ⚠️ Notas

- Este app usa Tailwind CSS, então algumas classes podem não ter equivalente direto no Figma
- Animações e interações complexas precisarão ser recriadas no Figma separadamente
- Para protótipo funcional, use o recurso de Prototype do Figma para conectar as telas

---

**Criado para o projeto de Registro de Ocorrências Urbanas - Gov.br**
