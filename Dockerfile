# Use Node.js 18 Alpine as base image
FROM node:18-alpine

WORKDIR /app

# Copy package files and .npmrc
COPY package.json .npmrc ./

# Install dependencies with legacy peer deps to handle React 19 conflicts
RUN npm install --legacy-peer-deps --force

# Copy source code
COPY . .

# Set environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Build the application
RUN npm run build

# Expose port 3000 (Cloud Run default)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]