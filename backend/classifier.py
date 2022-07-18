import torch
import numpy as np
import torch.nn.functional as F
from torch import nn
from torchvision import datasets, transforms, models
import pickle


class Classifier:

    def __init__(self, path):

        self.device = ('cuda' if torch.cuda.is_available() else 'cpu')

        #    Selección de dispositivo
        self.classes = ('margaritas', 'dientes de león', 'rosas', 'girasoles', 'tulipanes')
            
        
        self.model = self.load_model(path)
        

        # Transformador de datos
        self.transform = transforms.Compose([transforms.Resize((224, 224)),
                                             transforms.ToTensor(),
                                             transforms.Normalize(
                                                 (0.5, 0.5, 0.5), (0.5, 0.5, 0.5))
                                             ])
        pass


    def load_model(self, path):

        # Load in checkpoint
        checkpoint = torch.load(path, map_location=torch.device('cpu'))
        
        model = models.vgg16(pretrained=True)
        # Make sure to set parameters as not trainable
        for param in model.parameters():
            param.requires_grad = False
        model.classifier = checkpoint['classifier']

        # Load in the state dict
        model.load_state_dict(checkpoint['state_dict'])

        # Move to device
        model = model.to(self.device)

        return model


    def get_metrics():
        pass

    # Clasificador
    # Recive una imagen PIL
    # Retorna (etiqueta, probabilidad)

    def classify(self, img):
        img = self.transform(img)
        img = torch.tensor(img).to(self.device)

        pred = self.model(img)

        class_label = self.classes[torch.argmax(pred, dim=1)[0]]
        probs = pred[0]

        return (class_label, probs)
