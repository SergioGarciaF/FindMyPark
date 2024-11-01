// src/test/NearbyParkings.test.jsx
import { render, screen, waitFor } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import NearbyParkings from '../components/NearbyParkings/NearbyParkings';
import '@testing-library/jest-dom'; 
import parkingService from '../services/parkings'; // Importa el servicio

vi.mock('../services/parkings'); // Mockea el servicio

describe('NearbyParkings', () => {
    const mockSelectedLocation = { lat: 40.7128, lng: -74.006 };

    test('muestra los elementos de parking si selectedLocation tiene datos', async () => {
        // Mock de parkings cercanos
        const mockParkings = [
            {
                id: '1',
                name: 'Parking A',
                city: 'Ciudad A',
                size: 'Grande',
                location: { coordinates: [-74.001, 40.715] },
            },
            {
                id: '2',
                name: 'Parking B',
                city: 'Ciudad B',
                size: 'Pequeño',
                location: { coordinates: [-74.002, 40.716] },
            },
        ];

        // Mock de la función getNearbyParkings para que devuelva los parkings
        parkingService.getNearbyParkings.mockResolvedValue(mockParkings);

        render(
            <NearbyParkings 
                selectedLocation={mockSelectedLocation} 
            />
        );

        expect(screen.getByText('Cargando parkings cercanos...')).toBeInTheDocument();

        // Espera a que los parkings se carguen y se muestren en pantalla
        await waitFor(() => {
            expect(screen.getByText('Parking A')).toBeInTheDocument();
            expect(screen.getByText('Parking B')).toBeInTheDocument();
        });
    });

    test('muestra "No se encontraron parkings cercanos." si no hay parkings cerca', async () => {
        // Mock de la función getNearbyParkings para que devuelva un array vacío
        parkingService.getNearbyParkings.mockResolvedValue([]);

        render(
            <NearbyParkings 
                selectedLocation={mockSelectedLocation} 
            />
        );

        await waitFor(() => {
            expect(screen.getByText('No se encontraron parkings cercanos.')).toBeInTheDocument();
        });
    });
});
