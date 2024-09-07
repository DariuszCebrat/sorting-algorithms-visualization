# sorting-algorithms-visualization
W projekcie został użyty redux w celu dostępności do danych w każdym komponencie bez przymusu przesyłania danych w dół i odświeżania wszystkich komponentów.
Redux przechowywa tablice elementów oraz dispatch funkcje które updatują animacje.
Dużo komponentów visuzalizujących wartość w sortowaniu przez długi czas jest nie edytowanych więc takie komponenty zostały zoptymalizowane używając memo do zapisania stanu.
